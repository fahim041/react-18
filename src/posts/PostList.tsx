import { useState } from 'react';
import usePosts from './usePosts';

const PostList = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const { data, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  );
};

export default PostList;
