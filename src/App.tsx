import "./App.css";
import Hangman from "./components/Hangman";
import Header from "./components/Header";
import { HangmanProvider } from "./context/HangmanContext";
import "./App.css";

function App() {
  return (
    <HangmanProvider>
      <Header />
      <Hangman />
    </HangmanProvider>
  );
}

export default App;
