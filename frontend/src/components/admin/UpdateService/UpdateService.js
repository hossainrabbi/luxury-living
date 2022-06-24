import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getSingleService,
  updateService,
} from '../../../redux/actions/serviceAction';
import ServiceForm from '../ServiceForm/ServiceForm';
import Sidebar from '../Sidebar/Sidebar';

export default function UpdateService() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  const [posts, setPosts] = useState({
    name: services?.service?.name,
    price: services?.service?.price,
    description: services?.service?.description,
    image: services?.service?.image,
    category: services?.service?.category,
  });

  useEffect(() => {
    dispatch(getSingleService(id));
  }, [dispatch, id]);

  const updateHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateService(id, { ...posts }));
  };

  return (
    <Sidebar>
      <div className="container-fluid mt-4">
        <ServiceForm
          handleSubmit={updateHandleSubmit}
          posts={posts}
          setPosts={setPosts}
          update={true}
        />
      </div>
    </Sidebar>
  );
}
