import React, { useContext, useEffect } from "react";
import { HangmanContext } from "../context/HangmanContext";
import { wordList } from "../wordList";

const Notification = () => {
  const {
    count,
    setCount,
    word,
    setWord,
    guessStatus,
    setGuessStatus,
    setUsedWords,
    isEndGame,
    setIsEndGame,
  } = useContext(HangmanContext);

  const initWord = () => {
    let randomIndex: number = Math.floor(Math.random() * wordList.length);
    let newWord = "";

    try {
      newWord = wordList[randomIndex];
    } catch (e) {
      console.log(e);
      randomIndex = Math.floor(Math.random() * wordList.length);
      newWord = wordList[randomIndex];
    }

    const hiddenWord = newWord
      .split("")
      .map(() => "_")
      .join("");
    setWord(newWord.toUpperCase());
    setGuessStatus(hiddenWord);
  };

  const restartGame = () => {
    setCount(0);
    setUsedWords([]);
    initWord();
    setIsEndGame(false);
  };

  useEffect(restartGame, []);

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
