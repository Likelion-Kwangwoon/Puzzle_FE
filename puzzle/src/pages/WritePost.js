import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./WritePost.module.css";

const WritePost = () => {
  const location = useLocation();
  const type = location.state.type;

  return (
    <>
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
              <option value="1">교통</option>
              <option value="2">의료</option>
              <option value="3">식품</option>
              <option value="4">기타</option>
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
        <button type="submit" className={classes.submitBtn}>
          작성하기
        </button>
      </div>
    </>
  );
};

export default WritePost;
