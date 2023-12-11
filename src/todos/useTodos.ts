import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import APIClient from '../services/ApiClient';

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
