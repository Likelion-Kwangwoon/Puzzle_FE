import React from "react";
import LoginLogo from "../images/loginLogo.png";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <body>
        <img src={LoginLogo} alt="로고" style={{ width: "300px" }} />
        <button>
          <a href="http://20.196.211.79:8080/oauth2/authorization/google">
            구글 계정으로 로그인
          </a>
        </button>
      </body>
    </div>
  );
};

export default LoginPage;
