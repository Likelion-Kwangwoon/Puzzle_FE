import React from "react";
import classes from "./SelectPost.module.css";
import { Link } from "react-router-dom";

const SelectPost = () => {
  return (
    <div className={classes.body}>
      <Link to="/writepost" state={{ type: "public" }}>
        <button className={classes.publicBtn}>
          <p>공공서비스 관계자라면?</p> <h2>기업 게시글 쓰기</h2>
        </button>
      </Link>

      <Link
        to="writepost" state={{type: "normal"}}
      >
        <button className={classes.normalBtn}>
          <p>일반 사용자라면?</p> <h2>일반 게시글 쓰기</h2>
        </button>
      </Link>
    </div>
  );
};

export default SelectPost;
