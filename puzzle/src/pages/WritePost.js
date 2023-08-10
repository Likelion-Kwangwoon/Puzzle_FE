import React from "react";
import classes from "./WritePost.module.css";
import Header from "../components/Header.js";

const WritePost = () => {
  return (
    <>
      <Header />
      <div className={classes.body}>
        <form className={classes.writePost}>
          <h2>게시글 작성</h2>
          <div className={classes.postTitle}>
            <label>제목을 입력해주세요</label>
            <input type="text" />
          </div>

          <div className={classes.postCategory}>
            <label>카테고리를 선택해주세요.</label>
            <select name="category" id="category">
              <option value="1">카테고리1</option>
              <option value="2">카테고리2</option>
              <option value="3">카테고리3</option>
              <option value="4">카테고리4</option>
            </select>
          </div>

          <div className={classes.postContent}>
            <label>내용을 입력해주세요</label>
            <textarea
              name="postContent"
              placeholder="10자 이상 입력해주세요."
              required
            ></textarea>
            <button>사진 첨부</button>
          </div>
        </form>
        <button type="submit" className={classes.submitBtn}>작성하기</button>
      </div>
    </>
  );
};

export default WritePost;
