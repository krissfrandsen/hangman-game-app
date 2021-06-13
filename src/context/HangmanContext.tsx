import React, { createContext, useState } from "react";

export const HangmanContext = createContext<any>(null);

export const HangmanProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [word, setWord] = useState("hangman");
  const [guessStatus, setGuessStatus] = useState<any>("_______");
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [isEndGame, setIsEndGame] = useState(false);

  const value = {
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
  };

  return (
    <HangmanContext.Provider value={value}>{children}</HangmanContext.Provider>
  );
};
