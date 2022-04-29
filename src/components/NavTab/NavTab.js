import React from 'react';
import './NavTab.css';

export default function NavTab({onStatus}) {


  const [isStatus, setIsStatus] = React.useState("all");

  const statusHandler = (evt) => {
    setIsStatus(evt.target.value);
    onStatus(evt.target.value);
  }

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
      <select className='select' id="selectBox" value={isStatus} onChange={statusHandler}>
          <option className="select__item" value="all">Все</option>
          <option className="select__item" value="portraits">Портреты</option>
          <option className="select__item" value="studio">Студийные</option>
          <option className="select__item" value="love">Love story</option>
      </select>
    </>
  )
}
