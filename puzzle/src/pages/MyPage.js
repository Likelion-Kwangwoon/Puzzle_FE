import React from "react";
import classes from "./MyPage.module.css";

import logo from "../images/logo.png";
import Card from "../UI/Card.js";

const MyPage = () => {
  return (
    <div className={classes.mypage}>
      <div className={classes.body}>
        <h2>마이 페이지</h2>
        <div className={classes.userInfo}>
          <div className={classes.profileImage}>
            <div className={classes.image}>
              <img src={logo} alt="프로필사진" />
            </div>
            <button>사진 변경</button>
          </div>
          <div className={classes.profileInfo}>
            <table>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>멋쟁이사자</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>likelion@likelion.org</td>
                </tr>
                <tr>
                  <th>기업 회원</th>
                  <td>X</td>
                </tr>
                <tr>
                  <th>휴대전화</th>
                  <td>010-1234-5678</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.subscribe}>
          <h2>이용권 구독 </h2>
          <span>공공기관 회원 전용</span>
          <div className={classes.products}>
            <Card className={classes.card}>
              <h3>베이직</h3>
              <p>상단 노출 월 1회</p>
              <p>끌어올리기 월 1회</p>
              <p>배너 광고 월 1회</p>
              <button>월간 이용권 월 399,000원</button>
              <button>연간 이용권 연 4,500,000원</button>
            </Card>
            <Card className={classes.card}>
              <h3>스탠다드</h3>
              <p>상단 노출 월 3회</p>
              <p>끌어올리기 월 3회</p>
              <p>배너 광고 월 3회</p>
              <button>월간 이용권 월 699,000원</button>
              <button>연간 이용권 연 7,500,000원</button>
            </Card>
            <Card className={classes.card}>
              <h3>프리미엄</h3>
              <p>상단 노출 월 5회</p>
              <p>끌어올리기 월 5회</p>
              <p>배너 광고 월 5회</p>
              <button>월간 이용권 월 1,299,000원</button>
              <button>연간 이용권 연 14,500,000원</button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
