import { useSelector } from "react-redux";
import styles from "./userDetails.module.css";
import Post from "../posts/post";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import catImage from "../../assets/Cat03.jpg";
import { Link } from "react-router-dom";
import Loader from "../loader/loader";
import BackArrow from "../backArrow/backArrow";
function UserDetails(props) {
  const userDetailsData = useSelector((state) => state.userDataDetails);
  const userPostsData = useSelector((state) => state.userPostsData);
  const [showLoader, setShowLoader] = useState(true);
  const [showBurger, setBurger] = useState(false);
  function setShowUnShowBurger() {
    setBurger(!showBurger);
  }
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  }, [userPostsData]);
  return (
    <div>
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
        <div
          style={showLoader ? { height: "100%" } : {}}
          className={styles.content}
        >
          {showLoader ? (
            ""
          ) : (
            <div key={userDetailsData.id} className={styles.userDetails}>
              <div>{userDetailsData.name}</div>
              <div>{userDetailsData.phone}</div>
              <div>{userDetailsData.email}</div>
              <div>{userDetailsData.address.city}</div>
            </div>
          )}

          {showLoader ? (
            <Loader loaderSize="80px" />
          ) : (
            userPostsData.map((post) => (
              <Post
                key={post.id}
                postId={post.id}
                user={post.userId}
                postTitle={post.title}
                postBody={post.body}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
