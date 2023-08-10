import React from "react";
import classes from "./PostFilter.module.css";

/**
 * props:
 * filterName,
 * selected,
 * options {value: ~~~}
 * onChangeFilter,
 */

const PostFilter = ({filterName, options, onChangeFilter}) => {
  const filterChangeHandler = (event) => {
    const filterData = event.target.value;
    onChangeFilter(filterData);
  };

  console.log(options);

  return (
    <div className={classes.postFilter}>
      <div className={classes["postFilter__control"]}>
        <label>{filterName}</label>
        <select id={filterName} /*value={props.selected}*/ onChange={filterChangeHandler}>
          {options.map((option) => {
            return (
              <option value={option.value}>{option.value}</option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default PostFilter;
