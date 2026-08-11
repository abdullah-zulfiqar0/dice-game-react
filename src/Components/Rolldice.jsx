import React, { useState } from "react";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";
const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
const Rolldice = ({ currentdice, rolldice }) => {
  return (
    <div className="dice-container">
      <div className="dice" onClick={rolldice}>
        <img
          src={diceImages[currentdice - 1]}
          alt={`Dice showing number ${currentdice}`}
        />
      </div>
      <p> Click on Dice to roll</p>
    </div>
  );
};

export default Rolldice;
