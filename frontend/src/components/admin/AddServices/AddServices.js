import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

export default function AddServices() {
  const [serviceIcon, setServiceIcon] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    const render = new FileReader();
    render.onload = () => {
      if (render.readyState === 2) {
        setServiceIcon(render.result);
      }
    };

    render.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = (data) => {
    if (!serviceIcon) return;
    const serviceDetails = {
      ...data,
      serviceIcon,
    };

    console.log(serviceDetails);
  };

  return (
    <Sidebar>
      <div className="container-fluid mt-4">
        <Form
          className="overflow-hidden px-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service Name:</Form.Label>
                <Form.Control
                  type="text"
                  {...register('serviceName', { required: true })}
                  placeholder="Enter Service Name"
                  required
                />
                {errors.serviceName && (
                  <Form.Text className="text-danger">
                    Service name is required
                  </Form.Text>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  {...register('servicePrice', { required: true })}
                  placeholder="Enter Service Price"
                  required
                />
                {errors.serviceName && (
                  <Form.Text className="text-danger">
                    Service price is required
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Choose Category:</Form.Label>
                <Form.Select
                  {...register('serviceCategory', { required: true })}
                  required
                >
                  <option value="design">Design</option>
                  <option value="home">Home</option>
                  <option value="arranged">Arranged</option>
                </Form.Select>
                {errors.serviceCategory && (
                  <Form.Text className="text-danger">
                    Service category is required
                  </Form.Text>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose Service icon:</Form.Label>
                <Form.Control
                  type="file"
                  name="serviceIcon"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service Description:</Form.Label>
                <Form.Control
                  {...register('serviceDescription', { required: true })}
                  placeholder="Enter Service Description"
                  as="textarea"
                  rows={3}
                  required
                />
                {errors.serviceDescription && (
                  <Form.Text className="text-danger">
                    Service Description is required
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <input className="btn btn__color px-4" type="submit" />
        </Form>
      </div>
    </Sidebar>
  );
}
