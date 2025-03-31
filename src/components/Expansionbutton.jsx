import React from "react";

const Expansionbutton = ({ text, ...props }) => {
  return (
    <div className="expansionbutton">
      <button {...props}>{text}</button>
    </div>
  );
};

export default Expansionbutton;
