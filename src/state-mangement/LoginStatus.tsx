import useAuth from './hooks/useAuth';

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <div>
        <span>user: {user}</span>
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
