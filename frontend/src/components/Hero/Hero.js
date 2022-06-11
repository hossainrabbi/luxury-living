import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroImage from '../../images/hero.png';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Container>
      <Row className="align-items-center py-4">
        <Col md={6}>
          <div className={`${styles.hero__content} p-1`}>
            <h1>We Build Your Dream</h1>
            <p>
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
            <button className="btn px-4">Booking</button>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-1">
            <img src={HeroImage} alt="Hero Images" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
