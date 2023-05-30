import React, { useState } from "react";

const GuessTheNumber = () => {
  const [number, setNumber] = useState("");
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    setMessage("");
    setAttempts(0);
  };

  const handleGuess = () => {
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      setMessage("Invalid guess. Please enter a number.");
    } else {
      setAttempts(attempts + 1);

      if (parsedGuess === number) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
      } else if (parsedGuess < number) {
        setMessage("Too low. Try a higher number.");
      } else {
        setMessage("Too high. Try a lower number.");
      }
    }
    setGuess("");
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={generateRandomNumber}>Reset</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessTheNumber;
