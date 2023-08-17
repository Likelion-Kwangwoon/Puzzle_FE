import React from "react";
import classes from "./HomePage.module.css";
import Posts from "../components/Posts.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={classes.home}>
      <main className={classes.main}>
        <div className={classes.slider}></div>
        <div className={classes.body}>
          <aside className={classes.sidebar}>
            <h2>필터</h2>
            <select name="filter" id="filter1">
              <option value="1">필터1</option>
              <option value="2">필터2</option>
              <option value="3">필터3</option>
            </select>
            <select name="filter" id="filter2">
              <option value="1">필터1</option>
              <option value="2">필터2</option>
              <option value="3">필터3</option>
            </select>
            <select name="filter" id="filter3">
              <option value="1">필터1</option>
              <option value="2">필터2</option>
              <option value="3">필터3</option>
            </select>
          </aside>
          <div className={classes.contents}>
            <div className={classes["top-contents"]}>
              <select name="filter" id="filter3">
                <option value="1">최신순</option>
                <option value="2">이름순</option>
                <option value="3">인기순</option>
              </select>
              <Link to="/selectpost">
                <button className={classes.postBtn}>글 작성</button>
              </Link>
            </div>
            <div className={classes.posts}>
              <Posts />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
