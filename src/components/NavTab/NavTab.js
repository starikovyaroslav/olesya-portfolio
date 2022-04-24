import React from 'react';
import './NavTab.css';

export default function NavTab({onStatus}) {

  return (
    <>
      <nav className="nav">
        <ul className='nav__items'>
          <li className="nav__item" onClick={() => onStatus("all")}>Все</li>
          <li className="nav__item" onClick={() => onStatus("portraits")}>Портреты</li>
          <li className="nav__item" onClick={() => onStatus("studio")}>Студийные</li>
          <li className="nav__item" onClick={() => onStatus("love")}>Love story</li>
        </ul>
      </nav>
      <select className='select'>
          <option className="select__item" onClick={() => onStatus("all")}>Все</option>
          <option className="select__item" onClick={() => onStatus("portraits")}>Портреты</option>
          <option className="select__item" onClick={() => onStatus("studio")}>Студийные</option>
          <option className="select__item" onClick={() => onStatus("love")}>Love story</option>
      </select>
    </>
  )
}
