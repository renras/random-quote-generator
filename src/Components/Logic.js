import { quoteContainerActions } from "../Store/quoteContainerSlice";
import { getQuoteAndAuthor } from "../functions";

export const newQuoteHandler = (quotes, text, author, dispatch) => {
  dispatch(
    quoteContainerActions.setCurrentQuoteAndAuthor(getQuoteAndAuthor(quotes))
  );
  text.current.style.opacity = "0";
  text.current.style.transition = "opacity 0s";
  author.current.style.opacity = "0";
  author.current.style.transition = "opacity 0s";
  setTimeout(() => {
    text.current.style.opacity = "1";
    text.current.style.transition = "opacity 2s";
    author.current.style.opacity = "1";
    author.current.style.transition = "opacity 2s";
  }, 0);
};
