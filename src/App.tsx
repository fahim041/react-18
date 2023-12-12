import { useReducer } from 'react';
import tasksReducer from './state-mangement/reducers/tasksReducer';
import HomePage from './state-mangement/HomePage';
import Navbar from './state-mangement/Navbar';
import TasksContext from './state-mangement/context/TaskContext';
export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <Navbar />
      <HomePage />
    </TasksContext.Provider>
  );
}
