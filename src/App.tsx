import HomePage from './state-mangement/HomePage';
import Navbar from './state-mangement/Navbar';
import LoginStatus from './state-mangement/LoginStatus';
import AuthProvider from './state-mangement/AuthProvider';
import TaskProvider from './state-mangement/TaskProvider';

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <LoginStatus />
        <Navbar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}
