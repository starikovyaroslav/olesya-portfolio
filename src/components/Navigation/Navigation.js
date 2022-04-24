import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation () {

    const location = useLocation();

    const [isDataOpen, setIsDataOpen] = useState(false);

    function openData() {
        setIsDataOpen(true)
    }

    function closeData() {
        setIsDataOpen(false)
    }

    return (
        <>
        <nav className='navigation__main'>
          <Link to='/' className='navigation__link' target='_self'>Главная</Link>
          <Link to='/portfolio' className='navigation__link' target='_self'>Портфолио</Link>
          <Link to='/price' className='navigation__link' target='_self'>Цены</Link>
        </nav>
        <button className={isDataOpen ? 'navigation__burger closed' : 'navigation__burger'} onClick={openData}/>

        <div className="navigation__menu">
          <div className={`navigation__menu-small ${isDataOpen ? 'opened' : ''}`}>
            <button className='navigation__close-icon' onClick={closeData}/>
            <nav className='navigation__main-small'>
                <Link to='/' className={location.pathname === '/' ? 'navigation__link-small border' : "navigation__link-small"} target='_self'>Главная</Link>
                <Link to='/portfolio' className={location.pathname === '/portfolio' ? 'navigation__link-small border' : "navigation__link-small"} target='_self'>Портфолио</Link>
                <Link to='/price' className={location.pathname === '/price' ? 'navigation__link-small border' : "navigation__link-small"} target='_self'>Цены</Link>
            </nav>
          </div>
        </div>
        </>
    )
}
