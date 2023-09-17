import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

function Game() {
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
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setStatus();
  }

  return (
    <>
      {status === 'won' && <WonBanner numOfGuesses={guesses.length} restartGame={restartGame} />}
      {status === 'lost' && <LostBanner answer={answer} restartGame={restartGame} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={status} />
    </>
  );
}

export default Game;
