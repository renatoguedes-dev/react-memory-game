import { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentBestScore, setCurrentBestScore] = useState(0);

  return (
    <>
      <Header currentScore={currentScore} currentBestScore={currentBestScore} />
      <Cards
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        currentBestScore={currentBestScore}
        setCurrentBestScore={setCurrentBestScore}
      />
    </>
  );
}

export default App;
