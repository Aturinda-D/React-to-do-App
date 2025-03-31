import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Filter = ({ label, ...props }) => {
  return (
    <div className="filter" {...props}>
      <label>{label}</label>
      <div>
        <button>{<FaCaretUp />}</button>
        <button>{<FaCaretDown />}</button>
      </div>
    </div>
  );
};

export default Filter;
