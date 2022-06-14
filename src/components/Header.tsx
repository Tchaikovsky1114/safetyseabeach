import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-center items-center text-2xl gap-4'>
        <Link to='/'>qeqwe</Link>
        <Link to='/'>qeqwe</Link>
        <Link to='/'>qeqwe</Link>
        <Link to='/'>qeqwe</Link>
        <Link to='/'>qeqwe</Link>
      </nav>
    </header>
  );
};

export default Header;