import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, backgroundColor, ...props }) => {
  return (
    <button
      className="custom-button"
      {...props}
      style={{ backgroundColor: backgroundColor }}
    >
      {title}
    </button>
  );
};

export default React.memo(CustomButton);
