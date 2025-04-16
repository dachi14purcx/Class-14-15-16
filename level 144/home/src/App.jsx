import { useState } from 'react'
import Calculator from './components/calculator'


function App() {
  const [a, setValueA] = useState('')
  const [b, setValueB] = useState('')
  const [op, setValueOp] = useState('')
  const [res, setValueRes] = useState('')
  const [state, setState] = useState(true)
  const [resState, setRes] = useState(true)

  function changeA(n){
    setValueA(prev => prev + n)
  }

  function changeB(n){
    setValueB(prev => prev + n)
  }

  function operator(n){
    setState(!state)
    setValueOp(n)
  }

  function equals(n){
    setRes(!resState)
    setValueRes(Calculator(a, b, op))
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col bg-slate-700">
        <div className="w-[500px] h-24 bg-slate-900 text-white text-end p-6 rounded-xl text-5xl font-bold mb-4 shadow-black drop-shadow-2xl">
          {resState ? `${a} ${op} ${b}` : res}
        </div>

        <div className="grid grid-cols-4 gap-4 w-[500px] bg-slate-800 p-7 rounded-2xl drop-shadow-2xl">
          <button onClick={() => state ? changeA("7") : changeB("7")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">7</button>
          <button onClick={() => state ? changeA("8") : changeB("8")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">8</button>
          <button onClick={() => state ? changeA("9") : changeB("9")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">9</button>
          <button onClick={() => state ? operator("+") : null} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">+</button>

          <button onClick={() => state ? changeA("4") : changeB("4")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">4</button>
          <button onClick={() => state ? changeA("5") : changeB("5")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">5</button>
          <button onClick={() => state ? changeA("6") : changeB("6")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">6</button>
          <button onClick={() => state ? operator("-") : null} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">-</button>

          <button onClick={() => state ? changeA("1") : changeB("1")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">1</button>
          <button onClick={() => state ? changeA("2") : changeB("2")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">2</button>
          <button onClick={() => state ? changeA("3") : changeB("3")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">3</button>
          <button onClick={() => state ? operator("*") : null} className="bg-gray-100 h-14 rounded-xl text-2xl shadow">*</button>

          <button onClick={() => state ? changeA("0") : changeB("0")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">0</button>
          <button onClick={() => state ? operator("/") : null} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">/</button>
          <button onClick={() => !state && b.length > 0 ? equals("=") : null} className="bg-red-600 text-white h-16 rounded-xl text-2xl shadow">=</button>
          <button onClick={() => {setValueRes(''); setValueA(''); setValueB(''); setValueOp(''); setState(true)}} className="bg-indigo-500 text-white h-16 rounded-xl text-2xl shadow">DEL</button>
        </div>
      </div>
    </>
  )
}

export default App
