import React from "react";

const SocialsButton = ({ content, ...props }) => {
  return (
    <button className="social" {...props}>
      {content}
    </button>
  );
};

export default SocialsButton;
