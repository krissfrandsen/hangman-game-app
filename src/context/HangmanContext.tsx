import React, { createContext, useState } from "react";
import { wordList } from "../wordList";

type WordType = {
  term: string;
  meaning: string;
};

export const HangmanContext = createContext<any>(null);

export const HangmanProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [word, setWord] = useState<WordType>({ term: "", meaning: "" });
  const [guessStatus, setGuessStatus] = useState<string>("");
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [isEndGame, setIsEndGame] = useState<boolean>(false);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * wordList.length);
    setRandomNumber(random);
  };

  let selectedWord = wordList[randomNumber].term;

  const value = {
    generateRandomNumber,
    selectedWord,
    count,
    setCount,
    randomNumber,
    setRandomNumber,
    word,
    setWord,
    guessStatus,
    setGuessStatus,
    usedWords,
    setUsedWords,
    isEndGame,
    setIsEndGame,
  };

  return (
    <HangmanContext.Provider value={value}>{children}</HangmanContext.Provider>
  );
};
