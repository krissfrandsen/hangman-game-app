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
  console.log(guessStatus.indexOf("_") < 0);

  return (
    <div className="notification--wrapper">
      {isEndGame && guessStatus.indexOf("_") < 0 ? (
        <>
          <h2>Congratulations!</h2>
          <Button
            className="button btn--play btn__correct"
            onClick={() => restartGame()}
            children="Play Again"
          />
        </>
      ) : (
        ""
      )}
      {isEndGame && guessStatus.indexOf("_") >= 0 && count >= 10 ? (
        <>
          <h2>You lose!</h2>
          <p>
            Correct word is:
            <span className="notification--wrapper__item">
              {wordList[randomNumber].term}
            </span>
          </p>
          <p>
            Meaning:
            <span className="notification--wrapper__item">
              {wordList[randomNumber].meaning}
            </span>
          </p>
          <Button
            className="button btn--play btn__wrong"
            onClick={() => restartGame()}
            children="Try Again"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;
