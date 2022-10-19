import {useState, useEffect} from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { About, Home, Contact, Footer, Navbar, Portfolio, Skills, Service } from '../components';

const Index: NextPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <Home />
        <Navbar />
        <About />
        <Skills />
        <Service />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Index;
