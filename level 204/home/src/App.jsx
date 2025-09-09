import { useState } from 'react'

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.startsWith("995")) {
      input = input.slice(3);
    }
    input = input.slice(0, 9);

    let formatted = "+995";
    if (input.length > 0) formatted += " " + input.slice(0, 3);
    if (input.length > 3) formatted += " " + input.slice(3, 6);
    if (input.length > 6) formatted += " " + input.slice(6, 9);

    setValue(formatted);
  };

  return (
    <>
      <input type='text' value={value} onChange={handleChange} />
    </>
  )
}

export default App
