import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { projectData } from '../../data';
import Title from '../Title/Title';
import Project from './Project';

export default function Projects() {
  return (
    <section className="py-5 mt-5">
      <Container>
        <Title
          title="Projects"
          description="Discover the latest Interior Design available today"
        />
        <Row>
          {projectData.map((item) => (
            <Col md={4} key={item._id}>
              <Project {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
