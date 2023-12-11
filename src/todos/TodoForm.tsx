import { useRef } from 'react';
import useAddTodo from './useAddTodo';

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo();

  return (
    <>
      <div>{addTodo.error?.message}</div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });

          if (ref.current) {
            ref.current.value = '';
          }
        }}
      >
        <div>
          <input ref={ref} type="text" />
        </div>
        <div>
          <button type="submit" disabled={addTodo.isPending}>
            {addTodo.isPending ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
