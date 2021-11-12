export const arrayOfColors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

export const getQuoteAndAuthor = (data) => {
  let getRandomNumber = () => {
    return Math.floor(Math.random() * data.length);
  };
  let activeQuote = data[getRandomNumber()];
  return activeQuote;
};

export const getRandomNumber = (data) => {
  return Math.floor(Math.random() * data.length);
};

export const getRandomColor = () => {
  const newColor = arrayOfColors[getRandomNumber(arrayOfColors)];
  return newColor;
};
