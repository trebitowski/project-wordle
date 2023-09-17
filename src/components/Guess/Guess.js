import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../game-helpers";

function Cell({letter, status}) {
  const className = status ? `cell ${status}` : "cell"
  return (
    <span className={className}>
      {letter}
    </span>
  );
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <div className="guess">
      {range(5).map((column) => (
        <Cell 
          key={column} 
          letter={result != null && result[column].letter}
          status={result != null && result[column].status} 
        />
      ))}
    </div>
  );
}

export default Guess;
