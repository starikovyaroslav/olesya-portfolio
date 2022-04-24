import React from 'react';
import './NavTab.css';

export default function NavTab({onStatus}) {

  return (
    <nav className="nav">
      <ul>
        <li className="nav__link" onClick={() => onStatus("all")}>Все</li>
        <li className="nav__link" onClick={() => onStatus("portraits")}>Портреты</li>
        <li className="nav__link" onClick={() => onStatus("studio")}>Студийные</li>
        <li className="nav__link" onClick={() => onStatus("love")}>Love story</li>
      </ul>
    </nav>
  )
}
