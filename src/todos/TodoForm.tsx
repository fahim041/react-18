import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from './useTodos';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post('https://jsonplaceholder.typicode.com/todoos', todo)
        .then((res) => res.data),
    onMutate: (newTodo: Todo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
    },
    onSuccess: (savedTodo, newTodo) => {},
  });

  const ref = useRef<HTMLInputElement>(null);

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
