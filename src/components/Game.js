import React from 'react';

const Game = () => {
  return (
    <div className='game'>
      <div className='teams'>
        <div className='team'>
          <p className='logo'>logo</p>
          <p className='team-name'>Pelicans</p>
          <p className='score'>101</p>
        </div>
        <div className='team'>
          <p className='logo'>logo</p>
          <p className='team-name'>76ers</p>
          <p className='score'>100</p>
        </div>
      </div>
      <div className='clock'>
        <p>Q4 - 06:56</p>
      </div>
    </div>
  );
};

export default Game;
