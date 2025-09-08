import React, { useRef, useState } from "react";

// Day 199 — Task 1: Load Users only
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Users API Loader</h1>
      <UsersLoader />
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function UsersLoader() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const controllerRef = useRef(null);

  const loadUsers = async () => {
    setErrorMsg("");
    setStatus("loading");

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setUsers(data);
      setStatus("success");
    } catch (err) {
      if (err?.name === "AbortError") return;
      setStatus("error");
      setErrorMsg("მონაცემების წამოღება ვერ მოხერხდა ❌");
    }
  };

  return (
    <div className="grid gap-6 w-full max-w-3xl">
      <Card className="p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-gray-600 text-sm md:text-base">
              სანამ ღილაკს დააჭერ, ეკრანზე არაფერია ნაჩვენები.
            </p>
          </div>
          <button
            onClick={loadUsers}
            className="px-4 py-2 rounded-2xl bg-gray-900 text-white hover:opacity-90 active:scale-[.98] transition disabled:opacity-60"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Loading…" : "Load Users"}
          </button>
        </div>
      </Card>

      {status === "error" && (
        <Card className="p-6 border-red-200">
          <p className="text-red-600 font-medium">{errorMsg}</p>
          <p className="text-sm text-gray-600 mt-2">განმეორებით სცადე ან შეამოწმე ინტერნეტი.</p>
        </Card>
      )}

      {status === "success" && (
        <Card className="p-0 overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm text-gray-600">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t text-sm hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono">{u.id}</td>
                  <td className="px-4 py-3">{u.name}</td>
                  <td className="px-4 py-3">{u.username}</td>
                  <td className="px-4 py-3 truncate">{u.email}</td>
                  <td className="px-4 py-3">{u.address?.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}
