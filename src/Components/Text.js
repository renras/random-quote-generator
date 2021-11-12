import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Text = ({ currentColor, text, currentQuote, author, currentAuthor }) => {
  return (
    <>
      <div id="text" style={{ color: currentColor }} ref={text}>
        <FontAwesomeIcon className="quote-left" icon={faQuoteLeft} />
        <q>{currentQuote}</q>
      </div>
      <p id="author" style={{ color: currentColor }} ref={author}>
        - {currentAuthor}
      </p>
    </>
  );
};

export default Text;
