import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem('user', JSON.stringify(user));
    setSuccess(true);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">Username</span>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </label>

        <label className="block mb-4">
          <span className="block text-gray-700 mb-1">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </label>

        <label className="block mb-6">
          <span className="block text-gray-700 mb-1">Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        </label>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold"> Register </button>

        {success && (
          <p className="mt-4 text-green-600 text-center font-medium">
            succesfuly registered!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;