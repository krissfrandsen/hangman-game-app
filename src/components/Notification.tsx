import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

type GameType = {
  restartGame: () => void;
};

const Notification = ({ restartGame }: GameType) => {
  const { count, word, guessStatus, isEndGame } = useContext(HangmanContext);

  return (
    <div className="notification--wrapper">
      {isEndGame && guessStatus.indexOf("_") < 0 ? (
        <p>Congratulations! You win!</p>
      ) : (
        ""
      )}
      {isEndGame && guessStatus.indexOf("_") >= 0 && count >= 10 ? (
        <div>
          <p>
            You lose! Correct word is: <span>{word}</span>
          </p>
          <button
            className="notification--wrapper--button"
            onClick={() => restartGame()}
          >
            Try again?
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;
