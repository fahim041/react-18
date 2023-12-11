import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/APIClient';

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiClient = new APIClient<Todo>('/todos');

const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
