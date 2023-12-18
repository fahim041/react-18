import { Link } from 'react-router-dom';

const UserListPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users/1">User - 1</Link>
        </li>
        <li>
          <Link to="/users/2">User - 2</Link>
        </li>
        <li>
          <Link to="/users/3">User - 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserListPage;
