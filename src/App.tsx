import HomePage from './state-mangement/HomePage';
import Navbar from './state-mangement/Navbar';
import LoginStatus from './state-mangement/auth/LoginStatus';
import { TaskProvider } from './state-mangement/tasks';
import Counter from './state-mangement/counter/Counter';

export default function App() {
  return (
    <TaskProvider>
      <LoginStatus />
      <Counter />
      <Navbar />
      <HomePage />
    </TaskProvider>
  );
}
