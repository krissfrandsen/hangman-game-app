import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const HiddenWord = () => {
  const { count, selectedWord, usedWords } = useContext(HangmanContext);
  return (
    <div className="word--wrapper">
      <div className="word--wrapper__guess">
        <p>
          <span>{count > 1 ? "Wrong guesses" : "Wrong guess"}</span>: {count}
        </p>
      </div>
      <div className="word--wrapper__hidden">
        {selectedWord.split("").map((letter: string, idx: number) => (
          <p
            className="word--wrapper__hidden__item"
            key={`guess-${letter}-${idx}`}
          >
            {usedWords.includes(letter) ? letter : ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HiddenWord;
