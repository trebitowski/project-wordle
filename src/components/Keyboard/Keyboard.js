import React from "react";
import { range } from "../../utils";
import { KEYBOARD_LETTERS } from "../../constants";

function Key({ letter, status }) {
  const className = status ? `key ${status}` : "key"
  return <span className={className}>{letter}</span>;
}
function Keyboard({ letters }) {
  return (
    <div className="keyboard">
      {range(26).map((letterIndex) => {
        const letter = KEYBOARD_LETTERS[letterIndex];
        return <Key key="letter" letter={letter} status={letters[letter]} />;
      })}
    </div>
  );
}

export default Keyboard;
