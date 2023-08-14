import React from "react";
import { FaStar } from "react-icons/fa";

const Star = (props) => {
  return (
    <>
      <FaStar
        color={props.filled ? "orange" : "lightgray"}
        size="30px"
        style={{marginBottom: "-10px", cursor:"pointer"}}
        onClick={()=>{props.onClick(props.score)}}
      />
    </>
  );
};

export default Star;
