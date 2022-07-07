import React from 'react';

import './Prices.css';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import Preview from '../Preview/Preview';
import Footer from '../Footer/Footer';

export const Prices = () => {
  const location = useLocation();

  const [isStatus, setIsStatus] = React.useState("all");

  const statusHandler = (data) => {
    setIsStatus(data);
  }

  return (
    <section className='portfolio'>
      <Header />
      <Preview
        title={"Цены"}
        class={"preview__prices"}
      />
      <Footer />
    </section>
  )
}
