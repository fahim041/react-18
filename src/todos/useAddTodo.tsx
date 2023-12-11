import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from './useTodos';
import APIClient from '../services/ApiClient';

const apiClient = new APIClient<Todo>('/todos');

const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiClient.post,
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
