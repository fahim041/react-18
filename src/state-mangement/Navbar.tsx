import { useContext } from 'react';
import TasksContext from './tasks/TaskContext';

const Navbar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <h1>Navbar</h1>
      <h4>Tasks - {tasks.length}</h4>
    </>
  );
};

export default Navbar;
