import React from 'react';

const Game = () => {
  return (
    <div className='game'>
      <div className='teams'>
        <div className='team'>
          <p className='logo'>logo</p>
          <p className='team-name'>Pelicans</p>
        </div>
        <div className='team'>
          <p className='logo'>logo</p>
          <p className='team-name'>76ers</p>
        </div>
      </div>
      <div className='scores'>
        <p>101</p>
        <p>100</p>
      </div>
      <div className='clock'>
        <p>Q4 - 06:56</p>
      </div>
    </div>
  );
};

export default Game;
