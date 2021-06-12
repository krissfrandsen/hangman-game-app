import React, { useContext, useEffect } from "react";
import { HangmanContext } from "../context/HangmanContext";
import { wordList } from "../wordList";

const Hangman: React.FC = () => {
  const {
    count,
    setCount,
    word,
    setWord,
    guessStatus,
    setGuessStatus,
    usedWords,
    setUsedWords,
    isEndGame,
    setIsEndGame,
  } = useContext(HangmanContext);

  const alphabetList: string[] = "abcdefghijklmnopqrstuvwxyzöäå".split("");

  const isLetterCorrect = (letter: string) => word.indexOf(letter) >= 0;

  const hiddenWord = (letter: string, arr: string[]) => {
    if (!letter) {
      throw new Error("Letter does not exist");
    }
    let hidden = word;

    const guessedStatus = hidden
      .split("")
      .map((letter: string) => (arr.indexOf(letter) < 0 ? "_" : letter));

    setGuessStatus(guessedStatus.join(""));
  };

  const isLetterSelectedBefore = (word: string) => usedWords.indexOf(word) >= 0;

  const hiddenUsedLetters = (word: string) => {
    if (!isLetterSelectedBefore(word)) {
      setUsedWords((usedWords: any) => [...usedWords, word]);

      hiddenWord(word, [...usedWords, word]);
    }
  };

  const guess = (word: string) => {
    if (count >= 10) {
      return;
    }

    if (isLetterSelectedBefore(word)) {
      return;
    }

    hiddenUsedLetters(word);

    if (!isLetterCorrect(word)) {
      setCount((count: number) => count + 1);
    }
  };

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
    setWord(newWord.toLowerCase());
    setGuessStatus(hiddenWord);
  };

  const restartGame = () => {
    setCount(0);
    setUsedWords([]);
    initWord();
    setIsEndGame(false);
  };

  const checkEndGame = () => {
    if (count >= 10 || guessStatus.indexOf("_") < 0) {
      setIsEndGame(true);
    }
  };

  useEffect(checkEndGame, [guessStatus, count]);

  useEffect(restartGame, []);

  return (
    <div className="container">
      <div>
        {guessStatus.split("").map((letter: string, idx: number) => (
          <p key={`guess-${letter}-${idx}`}>{letter}</p>
        ))}
      </div>
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
          <button onClick={() => restartGame()}>Try again?</button>
        </div>
      ) : (
        ""
      )}
      <div>
        {alphabetList.map((alphabet) => (
          <button
            key={alphabet}
            onClick={() => guess(alphabet)}
            disabled={usedWords.indexOf(alphabet) >= 0 || isEndGame}
          >
            {alphabet}
          </button>
        ))}
      </div>
      <p>
        <span>{count > 1 ? "Wrong guesses" : "Wrong guess"}</span>: {count}
      </p>
    </div>
  );
};

export default Hangman;