import axios from 'axios';
import React, { useEffect } from 'react';

const Scores = () => {
  const url = 'https://api-nba-v1.p.rapidapi.com/games/live/';
  const config = {
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const scores = await axios.get(url, config);

      console.log(scores);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return <div>Scores</div>;
};

export default Scores;
