import { useEffect } from 'react'
import { useState } from 'react'
function App() {
  return (
    <>
      <button onClick={() => {throw new Error}}>This will cause error</button>
    </>
  )
}

export default App
