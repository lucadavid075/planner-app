import React, { useState } from 'react';
import '../styles/musicplayer.css'

const GuessTheNumberGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      setMessage('Please enter a valid number.😒');
    } else if (parsedGuess < number) {
      setMessage('Too low 😔! Try again.');
    } else if (parsedGuess > number) {
      setMessage('Too high 😔! Try again.');
    } else {
      setMessage(`🎉Congratulations! You guessed the number ${number} correctly!🥳`);
      setNumber(Math.floor(Math.random() * 100) + 1);
      setGuess('');
    }
  };

  return (
    <div className="guess-the-number-game">
      <h1>Have a little fun and guess number 😀</h1>
      <p className="message">{message}</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="guess-input"
      />
      <button onClick={handleGuess} className="guess-button">Guess</button>
    </div>
  );
};

export default GuessTheNumberGame;
