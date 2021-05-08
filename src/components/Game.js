import React from 'react';

const Game = ({ game }) => {
  const {
    clock,
    currentPeriod,
    hTeam: {
      nickName: hName,
      logo: hLogo,
      score: { points: hScore },
    },
    vTeam: {
      nickName: vName,
      logo: vLogo,
      score: { points: vScore },
    },
  } = game;
  return (
    <div className='game'>
      <div className='teams'>
        <div className='team'>
          <img className='logo' src={hLogo} alt='team-logo' />
          <p className='team-name'>{hName}</p>
        </div>
        <div className='team'>
          <img className='logo' src={vLogo} alt='team-logo' />
          <p className='team-name'>{vName}</p>
        </div>
      </div>
      <div className='scores'>
        <p>{hScore}</p>
        <p>{vScore}</p>
      </div>
      <div className='clock'>
        <p>{`Q${currentPeriod.split('/')[0]} - ${clock}`}</p>
      </div>
    </div>
  );
};

export default Game;
