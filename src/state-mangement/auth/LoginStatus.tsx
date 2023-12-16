import useAuthStore from './store';

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <div>
        <span>user: {user}</span>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );

  return (
    <div>
      <button onClick={() => login('test@t.com')}>Login</button>
      user: {user}
    </div>
  );
};

export default LoginStatus;
