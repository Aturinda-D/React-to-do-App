import React from "react";

const Expansionbutton = ({ ...props }) => {
  return (
    <div className="expansionbutton">
      <button {...props}>Load more</button>
    </div>
  );
};

export default Expansionbutton;
