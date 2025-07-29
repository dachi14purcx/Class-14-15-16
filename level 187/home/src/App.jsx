import React, { useState, useTransition } from 'react';

const App = () => {
  const words = Array.from({ length: 10000 }, (_, i) => `სიტყვა ${i}`);
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [tab, setTab] = useState('main');
  const [comments, setComments] = useState(
    Array.from({ length: 200 }, (_, i) => ({ id: i, text: `კომენტარი #${i}` }))
  );

  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState(null);

  // Input filtering
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const result = words.filter(word => word.toLowerCase().includes(value.toLowerCase()));
      setFiltered(result);
    });
  };

  // Tab switching
  const handleTabChange = (tabName) => {
    startTransition(() => {
      setTab(tabName);
    });
  };

  // Delete comment
  const handleDelete = (id) => {
    setDeletingId(id);

    startTransition(() => {
      setComments(prev => prev.filter(comment => comment.id !== id));
      setDeletingId(null);
    });
  };

  return (
    <div className="p-6 space-y-10 font-sans">
      {/* Tabs */}
      <div>
        <h2 className="text-xl font-bold mb-2">ტაბები:</h2>
        <button
          onClick={() => handleTabChange('main')}
          className={`px-4 py-1 rounded mr-2 ${tab === 'main' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          მთავარი
        </button>
        <button
          onClick={() => handleTabChange('products')}
          className={`px-4 py-1 rounded ${tab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          პროდუქტები
        </button>
        {isPending && <p className="text-sm text-gray-500 mt-2">იტვირთება...</p>}

        <div className="mt-4">
          {tab === 'main' && (
            <p className="text-gray-700">ეს არის მთავარი გვერდი</p>
          )}
          {tab === 'products' && (
            <div className="h-[200px] overflow-auto border p-2">
              {Array.from({ length: 1000 }, (_, i) => (
                <div key={i} className="border-b py-1">პროდუქტი #{i + 1}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Word Filter */}
      <div>
        <h2 className="text-xl font-bold mb-2">სიტყვების ძებნა:</h2>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="ჩაწერე სიტყვა..."
          className="border px-3 py-2 rounded w-full mb-2"
        />
        {isPending && <p className="text-sm text-gray-500">იტვირთება შედეგები...</p>}
        <ul className="h-[150px] overflow-auto border p-2 rounded">
          {filtered.slice(0, 50).map((word, index) => (
            <li key={index} className="border-b">{word}</li>
          ))}
        </ul>
      </div>

      {/* Comments */}
      <div>
        <h2 className="text-xl font-bold mb-2">კომენტარები:</h2>
        {isPending && <p className="text-sm text-gray-500">მუშაობს...</p>}
        <div className="h-[200px] overflow-auto border rounded p-2 space-y-1">
          {comments.map((comment) => (
            <div key={comment.id} className="flex justify-between items-center border-b py-1">
              <span>{deletingId === comment.id ? <em>იშლება...</em> : comment.text}</span>
              <button
                onClick={() => handleDelete(comment.id)}
                className="text-red-600 hover:underline text-sm"
              >
                წაშლა
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;