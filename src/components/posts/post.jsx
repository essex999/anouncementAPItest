import styles from "./post.module.css";
import cat from "../../assets/Cat03.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserPostsData } from "../../redux/slicers/userPosts";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/slicers/isSelectedUserRoute";
import { setUserDataDetails } from "../../redux/slicers/userDetails";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback } from "react";
function Post(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isComments, setComments] = useState(false);
  const [postComment, setPostComment] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const handleSetComments = () => {
    setComments(!isComments);
  };
  const notify = useCallback(() => {
    toast("error");
  }, []);
  function handleGetComments() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`
      )
      .then(function (response) {
        setPostComment(response.data);
      })
      .catch(function (error) {
        notify();
      });
  }
  function handleGetUserPosts(usetPostsId) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${usetPostsId}/posts`)
      .then(function (response) {
        dispatch(setUserPostsData(response.data));

        console.log("sssssss");
        navigate("/userDetails");
      })
      .catch(function (error) {
        notify();
      });
  }
  function handleGetUserDetails(usetPostsId) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${usetPostsId}`)
      .then(function (response) {
        dispatch(setUserDataDetails(response.data));
        console.log(response.data);
      })
      .catch(function (error) {
        notify();
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  }, [postComment]);
  return (
    <div className={styles.post}>
      <div className={styles.baseInfo}>
        <img
          onClick={() => {
            console.log(props.user);
            handleGetUserPosts(props.user);
            handleGetUserDetails(props.user);
            dispatch(selectUser(true));
          }}
          style={{ width: "60px", borderRadius: "50%", cursor: "pointer" }}
          src={cat}
          alt=""
        />
        <div>
          <h3>{props.postTitle}</h3>
          <div>{props.postBody}</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={() => {
                handleSetComments();
                handleGetComments();
                if (!postComment.length) {
                  setShowLoader(true);
                }
              }}
            >
              коментарии
            </button>
            {showLoader ? <Loader loaderSize={"20px"} /> : ""}
          </div>
          <ToastContainer />
        </div>
      </div>
      {isComments && showLoader === false
        ? postComment.map((comment) => (
            <div className={styles.comment} key={comment.id}>
              <div>{comment.email}</div>
              <div>{comment.name}</div>
            </div>
          ))
        : ""}
    </div>
  );
}
export default Post;
