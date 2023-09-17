import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [letters, setLetters] = React.useState({});
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState();

  function addGuess(submittedGuess) {
    const nextGuesses = [
      ...guesses,
      submittedGuess
    ];

    setGuesses(nextGuesses);

    if (submittedGuess === answer) {
      setStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }

    const checkResult = checkGuess(submittedGuess, answer);
    const newLetters = {...letters};
    checkResult.forEach((checkedLetter) => newLetters[checkedLetter.letter] = checkedLetter.status);
    setLetters(newLetters);
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setStatus();
    setLetters({});
  }

  return (
    <>
      {status === 'won' && <WonBanner numOfGuesses={guesses.length} restartGame={restartGame} />}
      {status === 'lost' && <LostBanner answer={answer} restartGame={restartGame} />}
      <GuessResults guesses={guesses} answer={answer} />
      <Keyboard letters={letters} />
      <GuessInput addGuess={addGuess} disabled={status} />
    </>
  );
}

export default Game;
