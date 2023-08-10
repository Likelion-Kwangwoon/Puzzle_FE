import React from "react";
import Header from "./../components/Header";
import LoginLogo from "../images/loginLogo.png";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <Header />
      <body>
        <img src={LoginLogo} alt="로고" style={{ width: "300px" }} />
        <a href="https://20.196.211.79:8080/oauth2/authorization/google">
          구글 계정으로 로그인
        </a>
      </body>
    </div>
  );
};

export default LoginPage;
