import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from './useTodos';
import axios from 'axios';

const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // invalidate cache
      // queryClient.invalidateQueries({
      //   queryKey: ['todos'],
      // });

      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
    },
  });
};

export default useAddTodo;
