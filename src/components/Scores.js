import React, { useEffect, useContext } from 'react';
import Game from './Game';
import ScoresContext from '../context/scores/scoresContext';

const Scores = () => {
  // const scoresContext = useContext(ScoresContext);
  // const { games, getScores } = scoresContext;

  // useEffect(() => {
  //   getScores();
  // }, []);

  const games = [1, 2, 3, 4, 5];

  return (
    <ul className='games'>
      <Game />
      <Game />
      <Game />
    </ul>
  );
};

export default Scores;
