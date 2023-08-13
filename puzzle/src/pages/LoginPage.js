import React from "react";
import LoginLogo from "../images/loginLogo.png";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.loginpage}>
      <div className={classes.register}>
        <form action="http://20.196.211.79:8080/user" method="POST">
          {/* <input
              type="hidden"
              th:name="${_csrf?.parameterName}"
              th:value="${_csrf?.token}"
            /> */}
          <div>
            <label>Email address</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
      <div className={classes.login}>
        <div>
          <div style={{ borderRadius: "1rem" }}>
            <div>
              <h2>LOGIN</h2>
              <p>서비스를 사용하려면 로그인을 해주세요!</p>

              <div>
                <form action="http://20.196.211.79/login" method="POST">
                  {/* <input
                    type="hidden"
                    th:name="${_csrf?.parameterName}"
                    th:value="${_csrf?.token}"
                  /> */}
                  <div>
                    <label>Email address</label>
                    <input type="email" name="username" />
                  </div>
                  <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                  </div>
                  <button type="submit">Login</button>
                </form>

                <button
                  type="button"
                  // onclick="location.href='/signup'"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
