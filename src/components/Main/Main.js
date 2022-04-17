import React from 'react';
import './Main.css';
import { Header } from '../Header/Header';
import Preview from '../Preview/Preview';

export const Main = () => {
  return (
    <section className='main'>
      <Header />
      <Preview />
    </section>
  )
}
