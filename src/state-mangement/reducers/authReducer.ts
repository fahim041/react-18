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

export default authReducer;
