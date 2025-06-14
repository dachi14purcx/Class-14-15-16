import React from 'react'

const Numbers = (props) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-[500px] bg-slate-800 p-7 rounded-2xl drop-shadow-2xl">
      <button onClick={() => props.state && props.operator("%")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">%</button>
      <button onClick={() => props.state && props.square()} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">x²</button>
      <button onClick={() => props.state && props.root()} className="bg-gray-100 h-16 rounded-xl text-2xl shadow"> &radic;x </button>
      <button onClick={() => !props.state && props.b.length > 0 ? props.equals("=") : null} className="bg-red-600 text-white h-16 rounded-xl text-2xl shadow">=</button>

      <button onClick={() => props.state ? props.changeA("7") : props.changeB("7")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">7</button>
      <button onClick={() => props.state ? props.changeA("8") : props.changeB("8")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">8</button>
      <button onClick={() => props.state ? props.changeA("9") : props.changeB("9")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">9</button>
      <button onClick={() => props.state && props.operator("+")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">+</button>

      <button onClick={() => props.state ? props.changeA("4") : props.changeB("4")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">4</button>
      <button onClick={() => props.state ? props.changeA("5") : props.changeB("5")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">5</button>
      <button onClick={() => props.state ? props.changeA("6") : props.changeB("6")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">6</button>
      <button onClick={() => props.state && props.operator("-")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">-</button>

      <button onClick={() => props.state ? props.changeA("1") : props.changeB("1")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">1</button>
      <button onClick={() => props.state ? props.changeA("2") : props.changeB("2")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">2</button>
      <button onClick={() => props.state ? props.changeA("3") : props.changeB("3")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">3</button>
      <button onClick={() => props.state && props.operator("*")} className="bg-gray-100 h-14 rounded-xl text-2xl shadow">*</button>

      <button onClick={() => props.state ? props.changeA("0") : props.changeB("0")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">0</button>
      <button onClick={() => props.state && props.operator("/")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">/</button>
      <button onClick={() => props.state ? props.changeA(".") : props.changeB(".")} className="bg-gray-100 h-16 rounded-xl text-2xl shadow">.</button>
      <button onClick={() => {props.setValueRes(''); props.setValueA(''); props.setValueB(''); props.setValueOp(''); props.setState(true); props.setRes(true)}} className="bg-indigo-500 text-white h-16 rounded-xl text-2xl shadow">DEL</button>
    </div>
  )
}

export default Numbers