import React, { useEffect, useContext } from 'react';
import ScoresContext from '../context/scores/scoresContext';

const Scores = () => {
  const scoresContext = useContext(ScoresContext);
  const { games, getScores } = scoresContext;

  useEffect(() => {
    getScores();
  }, []);

  return (
    <ul>
      {games.map((game) => (
        <li>{game.city}</li>
      ))}
    </ul>
  );
};

export default Scores;
