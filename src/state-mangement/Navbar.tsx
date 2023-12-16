import { useContext } from 'react';
import TasksContext from './tasks/TaskContext';
import useCounterStore from './counter/store';

const Navbar = () => {
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore();

  return (
    <>
      <h1>Navbar</h1>
      <h4>Tasks - {tasks.length}</h4>
      <h3>Counter - {counter}</h3>
    </>
  );
};

export default Navbar;
