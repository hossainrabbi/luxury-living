import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deleteService,
  getService,
} from '../../../redux/actions/serviceAction';
import Sidebar from '../Sidebar/Sidebar';

export default function ManageService() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { services } = useSelector((store) => store.services);
  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  const deleteServiceHandler = (id) => {
    dispatch(deleteService(id));
  };

  const updateServiceHandler = (id) => {
    navigate(`/admin/manage-services/${id}`);
  };

  return (
    <Sidebar>
      {services.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Service Picture</th>
              <th>Service Name</th>
              <th>Service Price</th>
              <th>Service Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={service._id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    style={{ height: 30 }}
                    src={service.image}
                    alt={service.name}
                  />
                </td>
                <td>{service.name}</td>
                <td>${service.price}</td>
                <td>
                  <span
                    className="btn edit mx-2 p-0"
                    onClick={() => updateServiceHandler(service._id)}
                  >
                    <BiEdit />
                  </span>
                  <span
                    className="btn delete mx-2 p-0"
                    onClick={() => deleteServiceHandler(service._id)}
                  >
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>Service Not Found</div>
      )}
    </Sidebar>
  );
}
