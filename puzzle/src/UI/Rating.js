import React from "react";
import classes from "./Rating.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const ratingArray=[1, 2, 3, 4, 5];

const Rating = () => {
  return (
    <div className={classes.rating}>
      <FaStar className={classes.emptyStar}/>
      <FaStar className={classes.emptyStar}/>
      <FaStar className={classes.emptyStar}/>
      <FaStar className={classes.emptyStar}/>
      <FaStar className={classes.emptyStar}/>
    </div>
  );
};

export default Rating;
