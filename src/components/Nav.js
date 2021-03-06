import React from 'react';
import { Navbar } from 'react-bootstrap';
const Nav = () => {
  return (
    <Navbar bg='primary' className='mb-5'>
      <Navbar.Brand>
        <img src='/nba-logo.png' width='100' height='100' alt='logo' />
      </Navbar.Brand>
      <h1 className='mx-auto text-light'>NBA Live Scores</h1>
    </Navbar>
  );
};

export default Nav;
