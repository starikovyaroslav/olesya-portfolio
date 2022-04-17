import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation () {

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
          <Link to='/portfolio' className='navigation__link navigation__link-movie' target='_self'>Портфолио</Link>
          <Link to='/price' className='navigation__link' target='_self'>Цены</Link>
        </nav>
        <button className={isDataOpen ? 'navigation__burger closed' : 'navigation__burger'} onClick={openData}/>

        <div className="navigation__menu">
          <div className={`navigation__menu-small ${isDataOpen ? 'opened' : ''}`}>
            <button className='navigation__close-icon' onClick={closeData}/>
            <nav className='navigation__main-small'>
                <Link to='/' className='navigation__link-small' target='_self'>Главная</Link>
                <Link to='/portfolio' className='navigation__link-small' target='_self'>Портфолио</Link>
                <Link to='/price' className='navigation__link-small' target='_self'>Цены</Link>
            </nav>
          </div>
        </div>
        </>
    )
}
