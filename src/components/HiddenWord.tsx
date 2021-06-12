import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const HiddenWord = () => {
  const { guessStatus } = useContext(HangmanContext);
  return (
    <div className="word--wrapper">
      {guessStatus.split("").map((letter: string, idx: number) => (
        <p className="word--wrapper__item" key={`guess-${letter}-${idx}`}>
          {letter}
        </p>
      ))}
    </div>
  );
};

export default HiddenWord;
