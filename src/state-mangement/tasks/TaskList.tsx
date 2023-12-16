import { useContext } from 'react';
import TasksContext from './TaskContext';

const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTasks();

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), title: 'Task ' + Date.now() },
          })
        }
      >
        New Task
      </button>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.title}{' '}
          <button onClick={() => dispatch({ type: 'DELETE', taskId: task.id })}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default TaskList;
