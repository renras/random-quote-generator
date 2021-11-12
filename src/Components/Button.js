import React from "react";

const Button = ({
  newQuoteHandler,
  quotes,
  text,
  author,
  dispatch,
  currentColor,
}) => {
  return (
    <button
      onClick={() => newQuoteHandler(quotes, text, author, dispatch)}
      id="new-quote"
      style={{ backgroundColor: currentColor }}
    >
      New quote
    </button>
  );
};

export default Button;
