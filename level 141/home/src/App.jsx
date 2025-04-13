import React from 'react';
import Contact from './components/contact';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <>
      <body className=' bg-gray-50 flex flex-col items-center'>     
        <Home/>
        <About/>
        <Contact />
      </body>
    </>
  );
}

export default App;