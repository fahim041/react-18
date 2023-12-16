import { useReducer } from 'react';
import authReducer from './reducers/authReducer';

const LoginStatus = () => {
  const [user, dispatch] = useReducer(authReducer, '');

  if (user)
    return (
      <div>
        <span>{user}</span>
        <div>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
        </div>
      </div>
    );

  return (
    <div>
      <button
        onClick={() => dispatch({ type: 'LOGIN', username: 'test@t.com' })}
      >
        Login
      </button>
      user: {user}
    </div>
  );
};

export default LoginStatus;
