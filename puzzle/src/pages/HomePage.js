import React from "react";

const Homepage = () => {
  return (
    <>
      <header>
        <section className="top-section">
          <ul>
            <li>
              <a href="/mypage">마이페이지</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
          </ul>
        </section>
        <section className="bottom-section">
          <picture>{/* 로고*/}</picture>
          <div>{/* 검색창 */}</div>
          <div className="menu">
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
            </ul>
          </div>
        </section>
      </header>
      <main>
        <div>{/** 광고 */}</div>
      </main>
    </>
  );
};

export default Homepage;
