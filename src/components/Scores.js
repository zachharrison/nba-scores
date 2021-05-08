import React, { useEffect, useContext } from 'react';
import Game from './Game';
import ScoresContext from '../context/scores/scoresContext';

const Scores = () => {
  const scoresContext = useContext(ScoresContext);
  const { games, getScores } = scoresContext;

  useEffect(() => {
    getScores();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className='games'>
      {games.map((game) => (
        <Game key={game.gameId} game={game} />
      ))}
    </ul>
  );
};

export default Scores;
