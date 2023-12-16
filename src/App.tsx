import { useReducer } from 'react';
import tasksReducer from './state-mangement/reducers/tasksReducer';
import HomePage from './state-mangement/HomePage';
import Navbar from './state-mangement/Navbar';
import TasksContext from './state-mangement/context/TaskContext';
import LoginStatus from './state-mangement/LoginStatus';
import AuthContext from './state-mangement/context/AuthContext';
import authReducer from './state-mangement/reducers/authReducer';

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <LoginStatus />
        <Navbar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}
