import React, { useContext } from "react";
import { HangmanContext } from "../context/HangmanContext";

const Figure = () => {
  const { count } = useContext(HangmanContext);
  console.log(count);

  return (
    <svg height="250" width="200" className="figure--container">
      {count > 0 && <line x1="20" y1="230" x2="100" y2="230" />}
      {count > 1 && <line x1="60" y1="20" x2="60" y2="230" />}
      {count > 2 && <line x1="60" y1="20" x2="140" y2="20" />}
      {count > 3 && <line x1="140" y1="20" x2="140" y2="50" />}

      {count > 4 && <circle cx="140" cy="70" r="20" />}

      {count > 5 && <line x1="140" y1="90" x2="140" y2="150" />}

      {count > 6 && <line x1="140" y1="120" x2="120" y2="100" />}
      {count > 7 && <line x1="140" y1="120" x2="160" y2="100" />}

      {count > 8 && <line x1="140" y1="150" x2="120" y2="180" />}
      {count > 9 && <line x1="140" y1="150" x2="160" y2="180" />}
    </svg>
  );
};

export default Figure;
