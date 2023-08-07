import React from "react";
import classes from "./HomePage.module.css";
import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import Card from './../UI/Card';

const Homepage = () => {
  return (
    <div className={classes.home}>
      <header className={classes.header}>
        <section className={classes["top-section"]}>
          <ul>
            <li>
              <a href="/mypage">마이페이지</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
          </ul>
        </section>
        <section className={classes["bottom-section"]}>
          <picture>사진</picture>
          <div className={classes.searchBox}>검색창</div>
          <div className={classes.menu}>
            <ul>
              <li>
                <a href="#x">메뉴1</a>
              </li>
              <li>
                <a href="#x">메뉴2</a>
              </li>
              <li>
                <a href="#x">메뉴3</a>
              </li>
              <li>
                <a href="#x">메뉴4</a>
              </li>
              <li>
                <a href="#x">메뉴5</a>
              </li>
            </ul>
          </div>
        </section>
      </header>
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
