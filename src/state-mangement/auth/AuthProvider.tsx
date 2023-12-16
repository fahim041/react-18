import { useReducer } from 'react';
import AuthContext from './AuthContext';

interface LoginAction {
  type: 'LOGIN';
  username: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      state = action.username;
      return state;
    case 'LOGOUT':
      return '';
    default:
      return '';
  }
};

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
