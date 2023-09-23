import axios from "axios";
import styles from "./home.module.css";
import { setData } from "../redux/slicers/dataSlicer";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/posts/post";
import MenuIcon from "@mui/icons-material/Menu";
import catImage from "../assets/Cat03.jpg";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomPagination from "../pagination/pagination";
import { useRef } from "react";
import { setOnePageData } from "../redux/slicers/dataSlicer";
import Loader from "../components/loader/loader";
import BackArrow from "../components/backArrow/backArrow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const containerRef = useRef(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.dataForOnePage);
  const [showBurger, setBurger] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const notify = useCallback(() => {
    toast("error");
  }, []);

  const getContent = useCallback(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response);
        dispatch(setData(response.data));
        dispatch(setOnePageData(1));
      })
      .catch(function (error) {
        notify();
      });
  }, [dispatch, notify]);

  function handleClickSetPage(selectedPage) {
    console.log(selectedPage);
    dispatch(setOnePageData(selectedPage));
  }

  useEffect(() => {
    getContent();
  }, [getContent]);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  }, [data]);

  function setShowUnShowBurger() {
    setBurger(!showBurger);
  }

  function scrollToTop() {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <div className={styles.burgerContent}>
          <MenuIcon onClick={setShowUnShowBurger} className={styles.menuIcon} />
          {showBurger ? (
            <div className={styles.burger}>
              <img
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                src={catImage}
                alt="cat"
              />
              <div>имя</div>
              <div>почтовый адрес</div>
              <Link to={"/"}>Список постов</Link>
              <Link to={"/aboutMe"}>Обо мне</Link>
            </div>
          ) : (
            ""
          )}
          {showBurger ? "" : <BackArrow />}
        </div>

        <div className={styles.postsContent}>
          <ToastContainer />
          <div ref={containerRef}></div>
          {showLoader ? (
            <div
              style={{
                width: "600px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Loader loaderSize="80px" loader />
            </div>
          ) : data ? (
            data.map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                user={post.userId}
                postTitle={post.title}
                postBody={post.body}
              />
            ))
          ) : (
            ""
          )}
        </div>
      </div>
      <CustomPagination pageSet={handleClickSetPage} scroll={scrollToTop} />
    </div>
  );
}
export default Home;
