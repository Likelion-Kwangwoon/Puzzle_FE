import React from "react";
import Card from "../UI/Card.js";
import classes from "./Posts.module.css";
import { Link } from "react-router-dom";

const dummy = [
  {
    postId: 1,
    postTitle: "포스트1",
    postWriter: "abc",
    isPublicWriter: false,
    viewNumber: 120,
  },
  {
    postId: 2,
    postTitle: "포스트2",
    postWriter: "def",
    isPublicWriter: true,
    viewNumber: 1200,
  },
  {
    postId: 3,
    postTitle: "포스트3",
    postWriter: "ghi",
    isPublicWriter: true,
    viewNumber: 34,
  },
  {
    postId: 4,
    postTitle: "포스트4",
    postWriter: "jkl",
    isPublicWriter: false,
    viewNumber: 8,
  },
];

const Posts = () => {
  return (
    <>
      {dummy &&
        dummy.map((card) => {
          return (
            <Link to={`/posts/${card.postId}`} key={card.postId}>
              <Card className={classes.post} id={card.postId}>
                <picture>
                  <img src="" alt="" />
                </picture>
                <div className={classes.postBody}>
                  <h3>{card.postTitle}</h3>
                  <div className={classes.postWriter}>
                    <p>{card.postWriter}</p>
                    {card.isPublicWriter && <p>★</p>}
                  </div>
                  <div></div>
                  <p>조회수 {card.viewNumber}</p>
                </div>
              </Card>
            </Link>
          );
        })}
    </>
  );
};

export default Posts;
