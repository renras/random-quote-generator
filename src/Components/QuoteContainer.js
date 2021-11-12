import React from "react";
import "./quoteContainer.css";
import Footer from "./Footer";
import Text from "./Text";
import { newQuoteHandler } from "./Logic";
import UseQuoteContainer from "./UseQuoteContainer";

const QuoteContainer = () => {
  const {
    text,
    author,
    quotes,
    currentColor,
    currentQuote,
    currentAuthor,
    dispatch,
  } = UseQuoteContainer();

  return (
    <article id="quote-box">
      <Text
        currentColor={currentColor}
        text={text}
        currentQuote={currentQuote}
        author={author}
        currentAuthor={currentAuthor}
      />
      <Footer
        text={text}
        author={author}
        quotes={quotes}
        currentColor={currentColor}
        newQuoteHandler={newQuoteHandler}
        dispatch={dispatch}
      />
    </article>
  );
};

export default QuoteContainer;
