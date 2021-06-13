import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";
import Button from "./Button";

type GameType = {
  restartGame: () => void;
};

const Notification: React.FC<GameType> = ({ restartGame }) => {
  const { count, word, guessStatus, isEndGame } = useContext(HangmanContext);

  return (
    <div className="notification--wrapper">
      {isEndGame && guessStatus.indexOf("_") < 0 ? (
        <>
          <h3>Congratulations!</h3>
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
        <div>
          <h3>You lose!</h3>
          <p>
            Correct word is: <span>{word}</span>
          </p>
          <Button
            className="button btn--play btn__wrong"
            onClick={() => restartGame()}
            children="Try Again"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notification;
