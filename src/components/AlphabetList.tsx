import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const AlphabetList = ({ guess }: any) => {
  const { usedWords, isEndGame } = useContext(HangmanContext);
  const alphabetList: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="alphabet--wrapper">
      {alphabetList.map((alphabet: string, idx: number) => (
        <button
          key={`letter-${alphabet}-${idx}`}
          className="alphabet--wrapper__item"
          onClick={() => guess(alphabet)}
          disabled={usedWords.indexOf(alphabet) >= 0 || isEndGame}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
};

export default AlphabetList;
