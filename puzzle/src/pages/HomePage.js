import React from "react";
import classes from "./HomePage.module.css";
import Card from './../UI/Card';
import Header from "../components/Header.js";

const Homepage = () => {
  return (
    <div className={classes.home}>
      <Header/>
      <main className={classes.main}>
        <div className={classes.slider}>광고 배너 영역</div>
        <div className={classes.body}>
          <aside className={classes.sidebar}>
            <h2>필터</h2>
            <select name="filter" id="filter1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select name="filter" id="filter2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select name="filter" id="filter3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </aside>
          <div className={classes.contents}>
            <div className={classes["top-contents"]}>
              <select name="filter" id="filter3">
                <option value="1">필터링1</option>
                <option value="2">필터링2</option>
                <option value="3">필터링3</option>
              </select>
              <button className={classes.postBtn}>글 작성</button>
            </div>
            <div className={classes.posts}>
              <Card className={classes.postCard}>내용1</Card>
              <Card className={classes.postCard}>내용1</Card>
              <Card className={classes.postCard}>내용1</Card>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
