import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const HiddenWord = () => {
  const { count, guessStatus } = useContext(HangmanContext);
  return (
    <div className="word--wrapper">
      <div className="word--wrapper__item">
        <p>
          <span>{count > 1 ? "Wrong guesses" : "Wrong guess"}</span>: {count}
        </p>
      </div>
      <div className="word--wrapper__hidden">
        {guessStatus.split("").map((letter: string, idx: number) => (
          <p
            className="word--wrapper__hidden__item"
            key={`guess-${letter}-${idx}`}
          >
            {letter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HiddenWord;
