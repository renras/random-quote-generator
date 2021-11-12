import React from "react";
import Socials from "./Socials";
import Button from "./Button";

const Footer = ({
  currentColor,
  newQuoteHandler,
  quotes,
  text,
  author,
  dispatch,
}) => {
  return (
    <div className="footer">
      <Socials currentColor={currentColor} />
      <Button
        newQuoteHandler={newQuoteHandler}
        quotes={quotes}
        text={text}
        author={author}
        dispatch={dispatch}
        currentColor={currentColor}
      />
    </div>
  );
};

export default Footer;
