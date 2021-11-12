import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuoteAndAuthor } from "../functions";
import { getRandomColor } from "../functions";

const data =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const getData = createAsyncThunk(
  "data/getData",
  async (dispatch, getState) => {
    return await fetch(data).then((res) => res.json());
  }
);

const initialQuoteContainerState = {
  quotes: [],
  currentColor: getRandomColor(),
  status: null,
  currentQuote: "",
  currentAuthor: "",
};

const quoteContainerSlice = createSlice({
  name: "quoteContainer",
  initialState: initialQuoteContainerState,
  reducers: {
    pushToQuotes(state, action) {
      state.quotes.push(action);
    },
    setCurrentQuoteAndAuthor(state, action) {
      state.currentQuote = action.payload.quote;
      state.currentAuthor = action.payload.author;
      state.currentColor = getRandomColor();
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getData.fulfilled]: (state, action) => {
      state.status = "success";
      let data = action.payload;
      for (let a in data) {
        for (let b in data[a]) {
          state.quotes.push(data[a][b]);
        }
      }
      let quoteAndAuthor = getQuoteAndAuthor(state.quotes);
      state.currentQuote = quoteAndAuthor.quote;
      state.currentAuthor = quoteAndAuthor.author;
    },
    [getData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const quoteContainerActions = quoteContainerSlice.actions;

export default quoteContainerSlice.reducer;
