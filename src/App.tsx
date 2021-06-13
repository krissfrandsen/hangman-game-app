import "./App.css";
import Hangman from "./components/Hangman";
import { HangmanProvider } from "./context/HangmanContext";
import "./App.css";

function App() {
  return (
    <HangmanProvider>
      <Hangman />
    </HangmanProvider>
  );
}

export default App;
