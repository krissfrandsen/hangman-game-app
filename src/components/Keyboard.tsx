import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";
import Button from "./Button";

type KeyboardType = {
  guess: (word: string) => void;
};

const Keyboard: React.FC<KeyboardType> = ({ guess }) => {
  const { usedWords, isEndGame } = useContext(HangmanContext);
  const keys: string[] = "abcdefghijklmnopqrstuvwxyzåäö".split("");

  return (
    <div className="keyboard--wrapper">
      {keys.map((alphabet: string, idx: number) => (
        <Button
          key={idx.toString()}
          className="button btn--keys"
          onClick={() => guess(alphabet)}
          children={alphabet}
          disabled={usedWords.indexOf(alphabet) >= 0 || isEndGame}
        />
      ))}
    </div>
  );
};

export default Keyboard;
