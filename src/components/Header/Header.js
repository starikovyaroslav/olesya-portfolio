import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

export const Header = () => {
  const location = useLocation();

  return (
    <header className={ location.pathname !== '/' ? 'header header-main' : 'header'}>
      <div className="header__inner">
        {/* <Link to="/" className="header__logo"></Link> */}
        <Navigation/>
      </div>
    </header>
  )
}
