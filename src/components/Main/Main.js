import React from 'react';
import './Main.css';
import { Header } from '../Header/Header';
import Preview from '../Preview/Preview';
import About from '../About/About';
import Footer from '../Footer/Footer';

export const Main = () => {
  return (
    <section className='main'>
      <Header />
      <Preview />
      <About />
      <Footer />
    </section>
  )
}
