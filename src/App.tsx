import HomePage from './state-mangement/HomePage';
import Navbar from './state-mangement/Navbar';
import LoginStatus from './state-mangement/auth/LoginStatus';
import AuthProvider from './state-mangement/auth/AuthProvider';
import { TaskProvider } from './state-mangement/tasks';
import Counter from './state-mangement/counter/Counter';

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <LoginStatus />
        <Counter />
        <Navbar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}
