import React, { useContext, useEffect } from "react";
import { HangmanContext } from "../context/HangmanContext";
import { wordList } from "../wordList";
import Title from "./Title";
import HiddenWord from "./HiddenWord";
import Notification from "./Notification";
import Keyboard from "./Keyboard";
import Figure from "./Figure";
const Hangman: React.FC = () => {
  const {
    count,
    setCount,
    randomNumber,
    setRandomNumber,
    setWord,
    guessStatus,
    setGuessStatus,
    usedWords,
    setUsedWords,
    isEndGame,
    setIsEndGame,
  } = useContext(HangmanContext);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * wordList.length);
    setRandomNumber(random);
  };

  let swedishWord = wordList[randomNumber].word;

  const isLetterCorrect = (letter: string) => swedishWord.indexOf(letter) >= 0;

  const hiddenWord = (letter: string, arr: string[]) => {
    if (!letter) {
      throw new Error("Letter does not exist");
    }
    let hidden = swedishWord;

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
    let newWord = "";
    try {
      newWord = swedishWord;
    } catch (e) {
      console.log(e);
      generateRandomNumber();
      newWord = swedishWord;
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
    generateRandomNumber();
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
      <Title />
      <div className="hero">
        <Figure />
        <HiddenWord />
      </div>
      {isEndGame ? (
        <Notification restartGame={restartGame} />
      ) : (
        <Keyboard guess={guess} />
      )}
    </div>
  );
};

export default Hangman;
