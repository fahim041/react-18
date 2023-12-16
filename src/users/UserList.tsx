import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
      });

    return () => controller.abort();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
