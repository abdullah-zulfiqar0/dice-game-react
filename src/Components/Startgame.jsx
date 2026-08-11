import React from "react";
import dicepic from "../assets/dices1.png";

const Startgame = ({ toggleGamePlay }) => {
  return (
    <div className="container">
      <div>
        <img src={dicepic} alt="Dice showing number 1" />
      </div>
      <div className="content">
        <h1>Dice Game </h1>
        <button onClick={toggleGamePlay} className="play-now-btn">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Startgame;
