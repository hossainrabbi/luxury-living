import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createService } from '../../../redux/actions/serviceAction';
import ServiceForm from '../ServiceForm/ServiceForm';
import Sidebar from '../Sidebar/Sidebar';

export default function AddServices() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    category: 'design',
  });

  const createHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(createService({ ...posts }));
  };

  return (
    <Sidebar>
      <div className="container-fluid mt-4">
        <ServiceForm
          handleSubmit={createHandleSubmit}
          posts={posts}
          setPosts={setPosts}
          update={false}
        />
      </div>
    </Sidebar>
  );
}
