import React from 'react';
import './Portfolio.css';
import { Header } from '../Header/Header';
import Preview from '../Preview/Preview';
import Footer from '../Footer/Footer';

export const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Header />
      <Preview
        title={"Портфолио"}
        class={"preview__portfolio"}
      />
      <Footer />
    </section>
  )
}
