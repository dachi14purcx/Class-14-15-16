import { useState, useId } from 'react';

function App() {
  const [text, setText] = useState('');
  const [radio, setRadio] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [dropdown, setDropdown] = useState('');

  const textId = useId();
  const radioName = useId();
  const checkboxPrefix = useId();
  const selectId = useId();

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">სავარჯიშო ფორმა</h1>

      {/* Text Field */}
      <div className="mb-4">
        <label htmlFor={textId} className="block mb-1">ტექსტი:</label>
        <input
          id={textId}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-3 py-1 w-full"
        />
      </div>

      {/* Radio Buttons */}
      <div className="mb-4">
        <p className="mb-1">რადიო:</p>
        {['ერთიანი', 'შუალედური', 'დასასრული'].map((val, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              name={radioName}
              value={val}
              checked={radio === val}
              onChange={(e) => setRadio(e.target.value)}
            />
            <span className="ml-2">{val}</span>
          </label>
        ))}
      </div>

      {/* Checkboxes */}
      <div className="mb-4">
        <p className="mb-1">ჩექბოქსები:</p>
        {['option1', 'option2', 'option3'].map((key, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              name={key}
              checked={checkboxes[key]}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">{`ჩექბოქსი ${index + 1}`}</span>
          </label>
        ))}
      </div>

      {/* Dropdown */}
      <div className="mb-4">
        <label htmlFor={selectId} className="block mb-1">აირჩიე ვარიანტი:</label>
        <select
          id={selectId}
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value)}
          className="border px-3 py-1 w-full"
        >
          <option value="">აირჩიე...</option>
          <option value="პირველი">პირველი</option>
          <option value="მეორე">მეორე</option>
          <option value="მესამე">მესამე</option>
        </select>
      </div>

      {/* Output */}
      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">შედეგი:</h2>
        <p><strong>ტექსტი:</strong> {text}</p>
        <p><strong>რადიო:</strong> {radio}</p>
        <p><strong>ჩექბოქსები:</strong> {Object.entries(checkboxes).filter(([k, v]) => v).map(([k]) => k).join(', ') || 'არცერთი'}</p>
        <p><strong>დროპდაუნ:</strong> {dropdown}</p>
      </div>
    </div>
  );
}

export default App;