import React, { useContext, useState } from "react";
import { NameContext } from "./userContext";

const UserProfile = () => {
  const { name, age, setName, setAge } = useContext(NameContext);
  const [nameInput, setNameInput] = useState()
  const [ageInput, setAgeInput] = useState()

  return (
    <div>
      <p>name: {name}</p>
      <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
      <button onClick={() => setName(nameInput)}>Change name</button>
      <br />

      <p>age: {age}</p>
      <input type="nu+mber" value={ageInput} onChange={(e) => setAgeInput(e.target.value)}/>
      <button onClick={() => setAge(ageInput)}>Change age</button>
    </div>
  );
};

export default UserProfile;