import { useState } from 'react'
import './App.css'
 
function App() {
  let [count, setCount] = useState(0)
  return (
    <div className='App'>
      <h1 className='counting'>Count:{count}</h1>
      <button className='buttonDown'
      onClick={() => {
        setCount(count - 1)
      }}
      >-</button>
      <button className='buttonUp'
      onClick={() => {
        setCount(count + 1)
      }}
      >+</button>
      <button className='buttonx10'
      onClick={() => {
        setCount(count + 10)
      }}
      >+10</button>
      <button className='buttonReset'
      onClick={() => {
        setCount(count = 0)
      }}
      >Reset</button>
    </div>
  )
}
  
export default App
