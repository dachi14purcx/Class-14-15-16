import { useState } from 'react'
import calculator from './components/calculator'
import Numbers from './components/numbers'
import Output from './components/output'
import squareFunc from './components/square'
import rootFunc from './components/root'

function App() {
  const [a, setValueA] = useState('')
  const [b, setValueB] = useState('')
  const [op, setValueOp] = useState('')
  const [res, setValueRes] = useState('')
  const [state, setState] = useState(true)
  const [resState, setRes] = useState(true)

  function changeA(n) {
    setValueA(prev => prev + n)
  }

  function changeB(n) {
    setValueB(prev => prev + n)
  }

  function operator(n) {
    setState(!state)
    setValueOp(n)
  }

  function equals() {
    setRes(!resState)
    setValueRes(calculator(a, b, op))
  }

  function handleRoot() {
    setRes(!resState)
    setValueRes(rootFunc(a))
  }

  function handleSquare() {
    setRes(!resState)
    setValueRes(squareFunc(a))
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-slate-700">
      <Output a={a} b={b} resState={resState} op={op} res={res} />
        
      <Numbers
        changeA={changeA}
        changeB={changeB}
        operator={operator}
        equals={equals}
        state={state}
        setValueRes={setValueRes}
        setValueA={setValueA}
        setValueB={setValueB}
        setValueOp={setValueOp}
        setState={setState}
        b={b}
        setRes={setRes}
        root={handleRoot}
        square={handleSquare}
      />
    </div>
  )
}

export default App