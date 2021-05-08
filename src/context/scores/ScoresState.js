import React, { useReducer } from 'react';
import axios from 'axios';
import ScoresContext from './scoresContext';
import ScoresReducer from './scoresReducer';
import { GET_SCORES } from '../types';

const ScoresState = (props) => {
  const initialState = {
    games: [],
  };

  // GET LIVE SCORES
  const getScores = async () => {
    const url = 'https://api-nba-v1.p.rapidapi.com/games/live/';
    const config = {
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
      },
    };

    const res = await axios.get(url, config);

    dispatch({
      type: GET_SCORES,
      payload: res.data.api.games,
    });
  };

  const [state, dispatch] = useReducer(ScoresReducer, initialState);

  return (
    <ScoresContext.Provider
      value={{
        games: state.games,
        getScores,
      }}
    >
      {props.children}
    </ScoresContext.Provider>
  );
};

export default ScoresState;
