import { useContext } from 'react';
import TasksContext from '../context/TaskContext';

const useTasks = () => useContext(TasksContext);

export default useTasks;
