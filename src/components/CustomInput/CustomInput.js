import React from "react";
import "./CustomInput.css";

const CustomInput = props => {
  return (
    <div className="custom-input-container">
      <input className="custom-input" {...props} />
    </div>
  );
};

export default React.memo(CustomInput);
