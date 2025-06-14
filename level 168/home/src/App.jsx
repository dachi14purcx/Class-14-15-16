import Card from "./components/Card"
import { data } from "./components/data"
import { useState } from "react";
import Filter from "./components/Filter";

function App() {
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage('გთხოვთ, შეავსოთ ყველა ველი');
      return;
    }

    // შეამოწმეთ არის თუ არა ამ მეილით უკვე რეგისტრირებული მომხმარებელი
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setMessage('მომხმარებელი ამ მეილით უკვე არსებობს');
      return;
    }

    // მონაცემების შენახვა localStorage-ში (email იქნება key)
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem(email, JSON.stringify(userData));

    setMessage('რეგისტრაცია წარმატებულია!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>რეგისტრაცია</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>სახელი:</label><br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="შეიყვანეთ სახელი"
          />
        </div>
        <div>
          <label>მეილი:</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="შეიყვანეთ მეილი"
          />
        </div>
        <div>
          <label>პაროლი:</label><br />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="შეიყვანეთ პაროლი"
          />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>რეგისტრაცია</button>
      </form>
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}

export default App