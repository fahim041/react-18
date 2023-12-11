import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = ({ page, pageSize }: PostQuery) => {
  return useQuery({
    queryKey: ['posts', page],
    queryFn: () =>
      axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _start: (page - 1) * pageSize,
            _limit: pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });
};

export default usePosts;
