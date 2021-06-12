import { useState } from "react";

export const useHangman = () => {
  const words = [
    "boolean",
    "api",
    "ascii",
    "bug",
    "char",
    "objects",
    "class",
    "code",
    "compilation",
    "data",
    "char",
    "algorithm",
    "argument",
    "unit",
    "testing",
    "bytecode",
    "character",
    "refactor",
    "comment",
  ];

  const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)].toLowerCase();
  };

  const [state, setState] = useState({
    mistake: 0,
    guessed: new Set([]),
    answer: randomWord(),
  });

  return { state, setState, randomWord } as const;
};
