import React, { createContext, useContext, useState } from 'react';

export const userContext = createContext();

const NameProvider = ({ children }) => {
    const [name, setName] = useState('Temuri')
    const [age, setAge] = useState('20')

  return (
    <userContext.Provider value={{name, setName, age, setAge}}> 
      {children}
    </userContext.Provider>
  );
};

export default NameProvider