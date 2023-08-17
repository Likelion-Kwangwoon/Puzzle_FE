import React, { useEffect, useState } from "react";
import classes from "./Rating.module.css";
import Star from "./Star.js";

const Rating = (props) => {
  const [rating, setRating] = useState(0);

  const starClickHandler = (selectedRating) => {
    setRating(selectedRating);
  };

  useEffect(() => {
    props.onChange(rating);
  }, [starClickHandler]);

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        return (
          <Star
            key={starIndex}
            score={starIndex}
            filled={starIndex <= rating}
            onClick={() => {
              starClickHandler(starIndex);
            }}
          />
        );
      })}
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
