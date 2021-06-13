import React, { useContext, useEffect } from "react";
import { HangmanContext } from "../context/HangmanContext";
import { wordList } from "../wordList";
import Title from "./Title";
import Notification from "./Notification";
import Keyboard from "./Keyboard";
import Hero from "./Hero";

const Hangman: React.FC = () => {
  const {
    generateRandomNumber,
    count,
    setCount,
    randomNumber,
    selectedWord,
    setWord,
    guessStatus,
    setGuessStatus,
    usedWords,
    setUsedWords,
    isEndGame,
    setIsEndGame,
  } = useContext(HangmanContext);

  const isLetterCorrect = (letter: string) => selectedWord.indexOf(letter) >= 0;

  const hiddenWord = (letter: string, arr: string[]) => {
    if (!letter) {
      throw new Error("Letter does not exist");
    }
    let hidden = selectedWord;

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
    generateRandomNumber();
    let newWord = "";

    try {
      newWord = wordList[randomNumber].term;
    } catch (e) {
      console.log(e);
      generateRandomNumber();
      newWord = wordList[randomNumber].term;
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
    setIsEndGame(false);
    initWord();
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
      <Title />
      <Hero />
      {isEndGame ? (
        <Notification restartGame={restartGame} />
      ) : (
        <Keyboard guess={guess} />
      )}
    </div>
  );
};

export default Hangman;
