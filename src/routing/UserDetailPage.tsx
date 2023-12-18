import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const { id } = useParams();
  return <div>User Detail Page - {id}</div>;
};

export default UserDetailPage;
