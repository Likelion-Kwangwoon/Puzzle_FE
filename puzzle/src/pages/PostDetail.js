import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import classes from "./PostDetail.module.css";
import Rating from "../UI/Rating.js";

const DETAIL = {
  postId: 1,
  postTitle: "포스트1",
  postWriter: "abc",
  postedDate: "2020-02-02",
  isPublicWriter: false,
  viewNumber: 120,
  postContent: "CONTENT 1 CONTENT 1 CONTENT 1 CONTENT 1 CONTENT 1",
  postLike: 88,
  postUnlike: 3,
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
      reviewLike: 14,
      reviewUnlike: 0,
    },
    {
      reviewId: 2,
      reviewWriter: "ghi",
      reviewedDate: "2020-02-02",
      rating: 4,
      reviewContent: "이거 진짜 좋아요. 리뷰 내용이에요.",
      reviewLike: 8,
      reviewUnlike: 1,
    },
  ],
};

const printStar = (rate) => {
  const starArr = [];
  for (let i = 0; i < rate; i++) {
    starArr.push(<FaStar key={i} className={classes.fillStar} />);
  }
  for (let i = 0; i < 5 - rate; i++) {
    starArr.push(<FaStar key={5 - i} className={classes.emptyStar} />);
  }
  return starArr;
};

const PostDetail = () => {
  //const params = useParams();
  const reviewLikeArr = [];
  const reviewUnlikeArr = [];
  const reviewLikeBtnActiveArr = [];
  const reviewUnlikeBtnActiveArr = [];
  for (let i = 0; i < DETAIL.postReview.length; i++) {
    reviewLikeArr.push(DETAIL.postReview[i].reviewLike);
    reviewUnlikeArr.push(DETAIL.postReview[i].reviewUnlike);
    reviewLikeBtnActiveArr.push(false);
    reviewUnlikeBtnActiveArr.push(false);
  }

  const [postLike, setPostLike] = useState(DETAIL.postLike);
  const [postUnlike, setPostUnlike] = useState(DETAIL.postUnlike);
  const [postLikeBtnIsActive, setPostLikeBtnIsActive] = useState(false);
  const [postUnlikeBtnIsActive, setPostUnlikeBtnIsActive] = useState(false);
  const [reviewLike, setReviewLike] = useState(reviewLikeArr);
  const [reviewUnlike, setReviewUnlike] = useState(reviewUnlikeArr);
  const [reviewLikeBtnIsActive, setReviewLikeBtnIsActive] = useState(
    reviewLikeBtnActiveArr
  );
  const [reviewUnlikeBtnIsActive, setReviewUnlikeBtnIsActive] = useState(
    reviewUnlikeBtnActiveArr
  );

  const postLikeBtnHandler = () => {
    postLikeBtnIsActive ? setPostLike(postLike - 1) : setPostLike(postLike + 1);
    postUnlikeBtnIsActive
      ? setPostUnlike(postUnlike - 1)
      : setPostUnlike(postUnlike);
    setPostUnlikeBtnIsActive(false);
    setPostLikeBtnIsActive(!postLikeBtnIsActive);
  };

  const postUnlikeBtnHandler = () => {
    postUnlikeBtnIsActive
      ? setPostUnlike(postUnlike - 1)
      : setPostUnlike(postUnlike + 1);
    postLikeBtnIsActive ? setPostLike(postLike - 1) : setPostLike(postLike);
    setPostLikeBtnIsActive(false);
    setPostUnlikeBtnIsActive(!postUnlikeBtnIsActive);
  };

  const reviewLikeBtnHandler = (idx) => {
    let likeCnt = [...reviewLike];
    let unlikeCnt = [...reviewUnlike];
    let likeBtnActive = [...reviewLikeBtnIsActive];
    let unlikeBtnActive = [...reviewUnlikeBtnIsActive];

    if (likeBtnActive[idx]) {
      likeCnt = likeCnt.map((c, i) => {
        if (i === idx) return c - 1;
        else return c;
      });
      setReviewLike(likeCnt);
    } else {
      likeCnt = likeCnt.map((c, i) => {
        if (i === idx) return c + 1;
        else return c;
      });
      setReviewLike(likeCnt);
    }

    if (unlikeBtnActive[idx]) {
      unlikeCnt = unlikeCnt.map((c, i) => {
        if (i === idx) return c - 1;
        else return c;
      });
      setReviewUnlike(unlikeCnt);
    }

    unlikeBtnActive = unlikeBtnActive.map((c, i) => {
      if (i === idx) return false;
      else return c;
    });
    setReviewUnlikeBtnIsActive(unlikeBtnActive);

    likeBtnActive = likeBtnActive.map((c, i) => {
      if (i === idx) return !c;
      else return c;
    });
    setReviewLikeBtnIsActive(likeBtnActive);
  };

  const reviewUnlikeBtnHandler = (idx) => {
    let likeCnt = [...reviewLike];
    let unlikeCnt = [...reviewUnlike];
    let likeBtnActive = [...reviewLikeBtnIsActive];
    let unlikeBtnActive = [...reviewUnlikeBtnIsActive];

    if (unlikeBtnActive[idx]) {
      unlikeCnt = unlikeCnt.map((c, i) => {
        if (i === idx) return c - 1;
        else return c;
      });
      setReviewUnlike(unlikeCnt);
    } else {
      unlikeCnt = unlikeCnt.map((c, i) => {
        if (i === idx) return c + 1;
        else return c;
      });
      setReviewUnlike(unlikeCnt);
    }

    if (likeBtnActive[idx]) {
      likeCnt = likeCnt.map((c, i) => {
        if (i === idx) return c - 1;
        else return c;
      });
      setReviewLike(likeCnt);
    }

    likeBtnActive = likeBtnActive.map((c, i) => {
      if (i === idx) return false;
      else return c;
    });
    setReviewLikeBtnIsActive(likeBtnActive);

    unlikeBtnActive = unlikeBtnActive.map((c, i) => {
      if (i === idx) return !c;
      else return c;
    });
    setReviewUnlikeBtnIsActive(unlikeBtnActive);
  };

  const [enteredComment, setEnteredComment] = useState("");
  const [enteredRating, setEnteredRating] = useState(0);
  const [enteredReview, setEnteredReview] = useState("");

  const commentInputIsValid = enteredComment.trim() !== "";
  const reviewInputIsValid = enteredReview.trim() !== "" && enteredRating !== 0;

  const commentInputChangeHandler = (e) => {
    setEnteredComment(e.target.value);
  };

  const commentSubmissionHandler = (e) => {
    e.preventDefault();

    if (!commentInputIsValid) {
      return;
    }

    console.log(enteredComment);
    setEnteredComment("");
  };

  const reviewInputChangeHandler = (e) => {
    setEnteredReview(e.target.value);
  };

  const reviewSubmissionHandler = (e) => {
    e.preventDefault();

    if (!reviewInputIsValid) {
      return;
    }

    console.log(enteredReview);
    console.log(enteredRating);
    setEnteredReview("");
    // setEnteredRating(0);
  };

  useEffect(() => {
    console.log(enteredRating);
  }, [enteredRating]);

  return (
    <div className={classes.body}>
      <div className={classes.body}>
        <div className={classes.postBody}>
          <div className={classes.postDetail}>
            <h2>{DETAIL.postTitle}</h2>
            <div>
              <p>{DETAIL.postWriter}</p>
              {DETAIL.isPublicWriter && <FaStar size="20px" />}
            </div>
            <p>{DETAIL.postContent}</p>
            <div className={classes.likeUnlike}>
              <button
                onClick={postLikeBtnHandler}
                className={postLikeBtnIsActive ? classes.btnActive : ""}
              >
                좋아요<span>&nbsp;{postLike}</span>
              </button>
              <button
                onClick={postUnlikeBtnHandler}
                className={postUnlikeBtnIsActive ? classes.btnActive : ""}
              >
                싫어요<span>&nbsp;{postUnlike}</span>
              </button>
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
                          {com.commentWriter}{" "}
                          {com.isPublicComment && (
                            <FaStar size="15px" color="orange" />
                          )}
                        </td>
                        <td>{com.commentedDate}</td>
                        <td className={classes.commentUDBtn}>
                          <button>수정</button>
                          <button>삭제</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <form
              className={classes.writeComment}
              onSubmit={commentSubmissionHandler}
            >
              <input
                type="text"
                value={enteredComment}
                onChange={commentInputChangeHandler}
              />
              <button>댓글 작성</button>
            </form>
          </div>
        </div>
        <div className={classes.reviewBody}>
          <div className={classes.reviewList}>
            <div className={classes.reviewCount}>
              <h3>리뷰</h3>
              <h3>{DETAIL.postReview.length}</h3>
            </div>
            {DETAIL.postReview &&
              DETAIL.postReview.map((rev, idx) => {
                return (
                  <div key={rev.reviewId} className={classes.reviewBlock}>
                    <p>{rev.reviewWriter}</p>
                    <div className={classes.ratingAndBtn}>
                      <p>{printStar(rev.rating)}</p>
                      <div className={classes.reviewLikeUnlike}>
                        <button
                          onClick={() => {
                            reviewLikeBtnHandler(idx);
                          }}
                          className={
                            reviewLikeBtnIsActive[idx] ? classes.btnActive : ""
                          }
                        >
                          좋아요<span>&nbsp;{reviewLike[idx]}</span>
                        </button>
                        <button
                          onClick={() => {
                            reviewUnlikeBtnHandler(idx);
                          }}
                          className={
                            reviewUnlikeBtnIsActive[idx]
                              ? classes.btnActive
                              : ""
                          }
                        >
                          싫어요<span>&nbsp;{reviewUnlike[idx]}</span>
                        </button>
                      </div>
                    </div>
                    <p>{rev.reviewContent}</p>
                  </div>
                );
              })}
          </div>
          <form className={classes.reviewInput}>
            <Rating onChange={setEnteredRating} rate={enteredRating} />
            <div className={classes.writeComment}>
              <input
                type="text"
                value={enteredReview}
                onChange={reviewInputChangeHandler}
              />
              <button onClick={reviewSubmissionHandler}>리뷰 작성</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
