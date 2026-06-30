import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`p-1 px-2 rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
