// App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Registration from './Registration';
import MainPage from './MainPage';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/main" /> : <Registration setUser={setUser} />} />
        <Route path="/main" element={user ? <MainPage user={user} setUser={setUser} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

// Registration.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration({ setUser }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = form;
    if (!name || !email || !password) {
      alert('Fill all fields');
      return;
    }
    localStorage.setItem('user', JSON.stringify(form));
    setUser(form);
    navigate('/main');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full mb-2 p-2 border" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full mb-2 p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full mb-4 p-2 border" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}

// MainPage.jsx
import { useNavigate } from 'react-router-dom';

function MainPage({ user, setUser }) {
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
  };

  const deleteAccount = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
      <button onClick={logout} className="bg-yellow-500 text-white p-2 rounded mb-2">Logout</button>
      <button onClick={deleteAccount} className="bg-red-500 text-white p-2 rounded">Delete Account</button>
    </div>
  );
}

export default MainPage;