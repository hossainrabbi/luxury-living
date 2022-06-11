import React from 'react';
import Hero from '../../Hero/Hero';
import NavbarNav from '../../Navbar/NavbarNav';
import styles from './Home.module.css';

export default function Home() {
  return (
    <header className={styles.header}>
      <NavbarNav />
      <Hero />
    </header>
  );
}