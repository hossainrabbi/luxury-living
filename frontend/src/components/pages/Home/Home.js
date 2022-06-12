import React from 'react';
import Hero from '../../Hero/Hero';
import NavbarNav from '../../Navbar/NavbarNav';
import Projects from '../../Projects/Projects';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <NavbarNav />
        <Hero />
      </header>
      <Projects />
      <Services />
      <Testimonials />
    </>
  );
}
