import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const letters = guess?.value.split('') ?? [];

  return (
    <div className="guess">
      {range(5).map((column) => {
        const letter = letters[column];
        return (
          <span key={column} className="cell">
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export default Guess;
