import QuoteContainer from "./Components/QuoteContainer";
import { useSelector } from "react-redux";

function App() {
  const currentColor = useSelector(
    (state) => state.quoteContainer.currentColor
  );

  return (
    <main style={{ backgroundColor: currentColor }}>
      <QuoteContainer />
    </main>
  );
}

export default App;
