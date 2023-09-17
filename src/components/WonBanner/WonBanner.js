import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses, restartGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
        <button className="restart-btn" onClick={restartGame}>
          Play again?
        </button>
    </Banner>
  );
}

export default WonBanner;
