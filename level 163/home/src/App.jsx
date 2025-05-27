import React, { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
    };
    setExpenses([newExpense, ...expenses]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Personal Expense Tracker</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mb-8"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Expense Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Grocery"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amount ($)</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
        >
          Add Expense
        </button>
      </form>

      <div className="w-full max-w-2xl">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white p-4 rounded-xl shadow-md mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{expense.title}</h2>
              <p className="text-sm text-gray-600">{new Date(expense.date).toLocaleDateString()}</p>
            </div>
            <div className="text-xl font-bold text-green-600">${expense.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;