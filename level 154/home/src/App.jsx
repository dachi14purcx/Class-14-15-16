import { useState } from 'react'
import Count from './components/count'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Resset from './components/Resset'
import History from './components/History'
import Clear from './components/Clear'

function App() {
  let [count, setCount] = useState(0)
  let [history, setHistory] = useState([])

  return (
    <div className='text-7xl cursor-default flex w-screen h-screen justify-center items-center gap-100'>
      <div className='flex flex-col gap-10'>

        <div className='flex drop-shadow-2xl'>
          <Decrement setCount={setCount} history={history} setHistory={setHistory} count={count}/>
          <Count count={count} />
          <Increment setCount={setCount} history={history} setHistory={setHistory} count={count}/>
        </div>

        <Resset setCount={setCount} setHistory={setHistory} />
      </div>

      <div className='flex flex-col items-end'>
        <History history={history} />
        <Clear setHistory={setHistory}/>
      </div>
    </div>
  )
}

export default App
