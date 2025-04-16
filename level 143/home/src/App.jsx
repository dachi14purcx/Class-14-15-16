import { useState } from 'react'

function App() {
  const [count, counting] = useState(0)
  function click() {
    counting(count + 1)
  }

  return (
    <>
      <div className=' flex items-center justify-center h-screen bg-gray-100'>
      <button onClick={click} className='px-6 text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded-xl text-xl font-semibold'>{count}</button>
      </div>
    </>
  )
}

export default App
