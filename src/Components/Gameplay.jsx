import React, { useState } from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import Rolldice from "./Rolldice";
import Rules from "./Rules";
const Gameplay = () => {
  const [selectedNumber, setselectedNumber] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");
  const [rules, setrules] = useState(false);
  const [showrules, setshowrules] = useState(false);
  const generaterandomnumber = (min, max) => {
    const randomnumber = Math.floor(Math.random() * (max - min)) + min;
    return randomnumber;
  };

  const rolldice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
      return;
    }
    const randomnumber = generaterandomnumber(1, 7);
    setcurrentdice(randomnumber);

    if (selectedNumber === randomnumber) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
  };
  const resetscore = () => {
    setscore(0);
  };

  return (
    <div className="main-container">
      <div className="top-section">
        <Totalscore score={score} />
        <Numberselector
          error={error}
          seterror={seterror}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>

      <Rolldice currentdice={currentdice} rolldice={rolldice} />

      <div className="btns">
        <button onClick={resetscore} className="reset-btn">
          Reset Score{" "}
        </button>

        <button
          className="reset-btn"
          onClick={() => setshowrules((prev) => !prev)}
        >
          {showrules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showrules && <Rules />}
    </div>
  );
};

export default Gameplay;
