// pages/UserList.jsx
import { Link } from "react-router-dom";
import users from "../data/users.json";

export default function UserList() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">მომხმარებლები</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="text-blue-600">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}