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
      {games.length ? (
        games.map((game) => <Game key={game.gameId} game={game} />)
      ) : (
        <h4>There are no games on right now...</h4>
      )}
    </ul>
  );
};

export default Scores;
