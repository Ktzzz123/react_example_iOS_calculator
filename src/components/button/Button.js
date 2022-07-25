import React from "react";
import PropTypes from 'prop-types'
import "./Button.css";

const Button = ({ content, onButtonClick, type }) => {
  return (
    <div
      className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

Button.propTypes = {
    content: PropTypes.string,
    onButtonClick: PropTypes.func,
    type: PropTypes.string
  };
export default Button;