import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = (props) => {
  return (
    <header className={`${classes.header} ${props.className}`}>
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
        <picture>
          <Link to="/">
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                width: "125px",
                height: "50px",
                position: "relative",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  position: "absolute",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  width: "0",
                  height: "0",
                }}
              />
            </span>
          </Link>
        </picture>
        <div className={classes.searchBox}>
          검색창
          <span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                color: "#800080",
                width: "20px",
                height: "23px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
          </span>
        </div>
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
  );
};

export default Header;
