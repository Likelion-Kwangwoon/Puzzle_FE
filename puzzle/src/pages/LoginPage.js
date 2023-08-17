import React from "react";
import LoginLogo from "../images/loginLogo.png";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <img src={LoginLogo} alt="로고" />
      <button>구글 계정으로 로그인</button>
    </div>
  );
};

export default LoginPage;
