import './App.scss';
import HangmanFigure from './components/HangmanFigure/HangmanFigure';
import Word from './components/Word/Word';
import Keyboard from './components/Keyboard/Keyboard';
import { WordContext } from './context/WordContext';
import { useContext } from 'react';
import Message from './components/Message/Message';

function App() {
  const { isWon, isLost, word } = useContext(WordContext)
  return (
    <div className="App flex around wrap">
      {(!isWon && !isLost && word) && <> <HangmanFigure />
        <Word />
        <Keyboard /></>}
      {isWon && <Message title="You Won!" cta="Play Again" />}
      {isLost && <Message title="Maybe next time :(" cta="Try Again" />}
    </div>
  );
}

export default App;
