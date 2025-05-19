// Data.js
const users = [
  { id: 1, name: "Ana", age: 25, following: false },
  { id: 2, name: "Luka", age: 30, following: true },
  { id: 3, name: "Nino", age: 22, following: false },
];

// ProfileCard.jsx
import PropTypes from 'prop-types';

function ProfileCard({ name, age, following, onToggleFollow }) {
  return (
    <div className="border rounded p-4 shadow-md bg-white text-center">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Age: {age}</p>
      <button
        onClick={onToggleFollow}
        className={`mt-2 px-4 py-2 rounded text-white ${following ? 'bg-green-500' : 'bg-blue-500'}`}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  following: PropTypes.bool.isRequired,
  onToggleFollow: PropTypes.func.isRequired,
};

// App.jsx (Updated)
import { useState } from 'react';
import usersData from './Data';
import ProfileCard from './ProfileCard';

function App() {
  const [users, setUsers] = useState(usersData);

  const toggleFollow = (id) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, following: !user.following } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {users.map(user => (
        <ProfileCard
          key={user.id}
          name={user.name}
          age={user.age}
          following={user.following}
          onToggleFollow={() => toggleFollow(user.id)}
        />
      ))}
    </div>
  );
}

export default App;
