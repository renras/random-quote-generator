import { configureStore } from "@reduxjs/toolkit";
import quoteContainerReducer from "./quoteContainerSlice";

const store = configureStore({
  reducer: { quoteContainer: quoteContainerReducer },
});

export default store;
