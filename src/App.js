import './App.css';
import Nav from './components/Nav';
import Scores from './components/Scores';

// CONTEXT
import ScoresState from './context/scores/ScoresState';

function App() {
  return (
    <ScoresState>
      <>
        <Nav />
        <Scores />
      </>
    </ScoresState>
  );
}

export default App;
