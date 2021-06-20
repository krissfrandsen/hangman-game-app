import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";
import { wordList } from "../wordList";
import Button from "./Button";

type GameType = {
  restartGame: () => void;
};

const Notification: React.FC<GameType> = ({ restartGame }) => {
  const { count, randomNumber, guessStatus, isEndGame } =
    useContext(HangmanContext);

  let finalMessage = "";
  let finalMessageRevealWord = "";
  let finalMessageWordMeaning = "";

  if (isEndGame && guessStatus.indexOf("_") < 0) {
    finalMessage = "Congratulations! You won! 😃";
  } else if (isEndGame && guessStatus.indexOf("_") >= 0 && count >= 10) {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `The right word was: ${wordList[randomNumber].term}`;
    finalMessageWordMeaning = `Meaning: ${wordList[randomNumber].meaning}`;
  }

  return (
    <div className="notification--wrapper">
      <h2>{finalMessage}</h2>
      <p>{finalMessageRevealWord}</p>
      <p className="notification--wrapper__item">{finalMessageWordMeaning}</p>
      <Button
        className="button btn--play"
        onClick={() => restartGame()}
        children="Play Again"
      />
    </div>
  );
};

export default Notification;
