import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Portfolio.css';
import { Header } from '../Header/Header';
import Preview from '../Preview/Preview';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';
import All from '../All/All';
import Portraits from '../Portraits/Portraits';
import Studio from '../Studio/Studio';
import Love from '../Love/Love';

export const Portfolio = () => {
  const location = useLocation();

  const [isStatus, setIsStatus] = React.useState("all");

  const statusHandler = (data) => {
    setIsStatus(data);
  }

  return (
    <section className='portfolio'>
      <Header />
      <Preview
        title={"Портфолио"}
        class={"preview__portfolio"}
      />
      <NavTab
        onStatus={statusHandler}
      />
      {isStatus === "all" ? <All /> : ''}
      {isStatus === "portraits" ? <Portraits /> : ''}
      {isStatus === "studio" ? <Studio /> : ''}
      {isStatus === "love" ? <Love /> : ''}
      <Footer />
    </section>
  )
}
