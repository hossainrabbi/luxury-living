import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../redux/actions/serviceAction';
import Title from '../Title/Title';
import Service from './Service';

export default function Services() {
  const dispatch = useDispatch();
  const { services } = useSelector((store) => store.services);

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  return (
    <section className="py-5">
      <Container>
        <Title
          title="Services"
          description="We're an agency tailored to all
          clients' needs that always delivers"
        />
        <Row className="mb-5">
          {services.map((item) => (
            <Col md={4} key={item._id}>
              <Service {...item} />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <button className="btn btn__color px-4">Explore more</button>
        </div>
      </Container>
    </section>
  );
}
