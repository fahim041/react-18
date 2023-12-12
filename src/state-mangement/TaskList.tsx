import { useContext, useReducer } from 'react';
import TasksContext from './context/TaskContext';

const TaskList = () => {
  const { tasks, dispatch } = useContext(TasksContext);

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
