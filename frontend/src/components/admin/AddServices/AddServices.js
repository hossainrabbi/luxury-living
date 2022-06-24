// import axios from 'axios';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useImageUpload from '../../../hooks/useImageUpload';
import { createService } from '../../../redux/actions/serviceAction';
import Sidebar from '../Sidebar/Sidebar';

export default function AddServices() {
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [posts, setPosts] = useState({
    name: '',
    price: '',
    description: '',
    category: 'design',
  });

  const { imagePost } = useImageUpload();
  const dispatch = useDispatch();
  const serviceCreate = useSelector((state) => state.serviceCreate);

  const handleImageChange = async (e) => {
    try {
      setImageUploadLoading(true);
      const { data } = await imagePost(e);
      setUploadImage(data.data.display_url);
      setImageUploadError('');
      setImageUploadLoading(false);
    } catch {
      setImageUploadError('Image Upload Fail!');
      setImageUploadLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createService({ ...posts, image: uploadImage }));
  };

  return (
    <Sidebar>
      <div className="container-fluid mt-4">
        <Form className="overflow-hidden px-2" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Service Name"
                  value={posts.name}
                  onChange={(e) => setPosts({ ...posts, name: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Service Price"
                  value={posts.price}
                  onChange={(e) =>
                    setPosts({ ...posts, price: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Choose Category:</Form.Label>
                <Form.Select
                  value={posts.category}
                  onChange={(e) =>
                    setPosts({ ...posts, category: e.target.value })
                  }
                  required
                >
                  <option value="design">Design</option>
                  <option value="home">Home</option>
                  <option value="arranged">Arranged</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose Service icon:</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  required
                />
                {imageUploadError && (
                  <small className="text-danger">{imageUploadError}</small>
                )}
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Service Description:</Form.Label>
                <Form.Control
                  placeholder="Enter Service Description"
                  as="textarea"
                  rows={3}
                  value={posts.description}
                  onChange={(e) =>
                    setPosts({ ...posts, description: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <input
            disabled={imageUploadLoading || serviceCreate.loading}
            className="btn btn__color px-4"
            type="submit"
            value={
              imageUploadLoading || serviceCreate.loading
                ? 'Loading...'
                : 'Submit'
            }
          />
          {serviceCreate.error && (
            <div className="text-center text-danger">
              {serviceCreate.error.message}
            </div>
          )}
        </Form>
      </div>
    </Sidebar>
  );
}
