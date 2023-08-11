import React from "react";
import { useParams } from "react-router-dom";
import classes from "./PostDetail.module.css";

const DETAIL = {
  postId: 1,
  postTitle: "포스트1",
  postWriter: "abc",
  postedDate: "2020-02-02",
  isPublicWriter: false,
  viewNumber: 120,
  postContent: "CONTENT 1 CONTENT 1 CONTENT 1 CONTENT 1 CONTENT 1",
  postComment: [
    {
      commentId: 1,
      commentWriter: "def",
      commentedDate: "2020-02-02",
      isPublicComment: true,
      commentContent: "댓글 내용입니다.",
    },
    {
      commentId: 2,
      commentWriter: "abc",
      commentedDate: "2020-02-02",
      isPublicComment: false,
      commentContent: "댓글 내용입니다.",
    },
  ],
  postReview: [
    {
      reviewId: 1,
      reviewWriter: "def",
      reviewedDate: "2020-02-02",
      rating: 5,
      reviewContent: "이거 진짜 좋아요. 리뷰 내용이에요.",
    },
    {
      reviewId: 2,
      reviewWriter: "ghi",
      reviewedDate: "2020-02-02",
      rating: 4,
      reviewContent: "이거 진짜 좋아요. 리뷰 내용이에요.",
    },
  ],
};

const RATING = ["★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];

const PostDetail = () => {
  const params = useParams();

  return (
    <div className={classes.body}>
      <div className={classes.body}>
        <div className={classes.postBody}>
          <div className={classes.postDetail}>
            <h2>{DETAIL.postTitle}</h2>
            <div>
              <p>{DETAIL.postWriter}</p>
              {DETAIL.isPublicWriter && <p>★</p>}
            </div>
            <p>{DETAIL.postContent}</p>
            <div className={classes.likeUnlike}>
              <button>좋아요</button>
              <button>싫어요</button>
            </div>
          </div>
          <div className={classes.postComment}>
            <h3>댓글</h3>
            <table>
              <tbody>
                {DETAIL.postComment &&
                  DETAIL.postComment.map((com) => {
                    return (
                      <tr key={com.commentId}>
                        <td>{com.commentContent}</td>
                        <td>
                          {com.commentWriter} {com.isPublicComment && "★"}
                        </td>
                        <td>{com.commentedDate}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className={classes.writeComment}>
              <input type="text" />
              <button>댓글 작성</button>
            </div>
          </div>
        </div>
        <div className={classes.reviewBody}>
          <div className={classes.reviewList}>
            <div className={classes.reviewCount}>
              <h3>리뷰</h3>
              <h3>{DETAIL.postReview.length}</h3>
            </div>
            {DETAIL.postReview &&
              DETAIL.postReview.map((rev) => {
                return (
                  <div key={rev.reviewId} className={classes.reviewBlock}>
                    <p>{rev.reviewWriter}</p>
                    <div className={classes.ratingAndBtn}>
                      <p>{RATING[rev.rating - 1]}</p>
                      <div className={classes.reviewLikeUnike}>
                        <button>좋아요</button>
                        <button>싫어요</button>
                      </div>
                    </div>
                    <p>{rev.reviewContent}</p>
                  </div>
                );
              })}
          </div>
          <div className={classes.writeComment}>
            {/** 별점 */}
            <input type="text" />
            <button>리뷰 작성</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
