import React from 'react';

import './About.css';
import photo from '../../images/photos.jpg';
import land from '../../images/land.jpg'

export default function About() {

  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__info'>
          <img src={land} alt='land' className='about__back' />
          <h2 className='about__about'>Обо мне</h2>
          <p className='about__text'>Текст</p>
        </div>
        <img src={photo} className='about__photo' alt='photographer'/>
      </div>
    </section>
  )
}
