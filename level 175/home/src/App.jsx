import { useRef, useEffect, useState } from 'react'

function App() {
  const scroll = useRef()
  const nameRef = useRef()
  const ageRef = useRef()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    if (!name) {
      nameRef.current?.focus()
    }
    if (!age) {
      ageRef.current?.focus()
    }
  }, [name, age])
  return (
    <div className='flex'>
      <div>
        <div ref={scroll} className='w-46 h-46 bg-stone-300 m-10 mb-[60vw]'></div>
        <div
          onClick={() => scroll.current.scrollIntoView({ behavior: 'smooth' })}
          className='w-46 h-46 bg-stone-300 m-10'
        ></div>
      </div>

      <div className='m-10'>
        <div>
          <label>name:</label>
          <input
            type="text"
            className='bg-stone-700 rounded-xl'
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>age:</label>
          <input
            type="number"
            className='bg-stone-700 rounded-xl'
            ref={ageRef} value={age} onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </div>
    </div>
  )
}

export default App