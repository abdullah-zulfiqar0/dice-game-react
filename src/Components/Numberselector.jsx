import React, { useState } from "react";

const Numberselector = ({
  selectedNumber,
  setselectedNumber,
  error,
  seterror,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);
  const numberselectorhandler = (value) => {
    setselectedNumber(value);
    seterror("");
  };

  return (
    <div className="numberselectedcontainer">
      <p className="error">{error}</p>

      <div className="flex">
        {arrNumber.map((value, idx) => {
          return (
            <div
              className="box"
              className={`box ${value === selectedNumber ? "selected" : ""}`}
              onClick={() => numberselectorhandler(value)}
              key={idx}
            >
              {value}
            </div>
          );
        })}
      </div>
      <p>Select Number </p>
    </div>
  );
};

export default Numberselector;
