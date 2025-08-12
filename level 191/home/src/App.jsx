import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import User from './components/User';
import ErrorPage from './components/ErrorPage';
import { UserProvider } from './context/UserContext';

function App() {
  const isLoggedIn = localStorage.getItem('loggedIn');

  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/users" /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<Main />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;