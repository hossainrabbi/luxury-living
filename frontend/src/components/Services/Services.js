import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { serviceData } from '../../data';
import Title from '../Title/Title';
import Service from './Service';

export default function Services() {
  return (
    <section className="py-5">
      <Container>
        <Title
          title="Services"
          description="We're an agency tailored to all
          clients' needs that always delivers"
        />
        <Row className="mb-5">
          {serviceData.map((item) => (
            <Col md={4} key={item._id}>
              <Service {...item} />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <button className="btn px-4">Explore more</button>
        </div>
      </Container>
    </section>
  );
}
