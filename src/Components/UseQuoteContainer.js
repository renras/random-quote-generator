import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getData } from "../Store/quoteContainerSlice";

const UseQuoteContainer = () => {
  const text = useRef(null);
  const author = useRef(null);
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quoteContainer.quotes);
  const currentColor = useSelector(
    (state) => state.quoteContainer.currentColor
  );
  const currentQuote = useSelector(
    (state) => state.quoteContainer.currentQuote
  );
  const currentAuthor = useSelector(
    (state) => state.quoteContainer.currentAuthor
  );

  useEffect(() => {
    dispatch(getData());
    try {
      text.current.style.opacity = "1";
      text.current.style.transition = "opacity 1s";
    } catch (error) {}
  }, [dispatch]);

  return {
    text,
    author,
    quotes,
    currentColor,
    currentQuote,
    currentAuthor,
    dispatch,
  };
};

export default UseQuoteContainer;
