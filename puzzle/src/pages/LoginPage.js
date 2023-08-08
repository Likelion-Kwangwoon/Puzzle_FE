import React from "react";
import Header from "./../components/Header";
import LoginLogo from "../images/loginLogo.png";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <Header />
      <body>
        <img src={LoginLogo} alt="로고" style={{width: "300px"}}/>
        <button>구글 계정으로 로그인</button>
      </body>
    </div>
  );
};

export default LoginPage;
