import React, { useState } from "react";
import "./App.css";
import Startgame from "./Components/Startgame";
import Gameplay from "./Components/Gameplay";
const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false);
  function toggleGamePlay() {
    setisGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? (
        <Gameplay />
      ) : (
        <Startgame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
};

export default App;
