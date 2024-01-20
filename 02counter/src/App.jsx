import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 15 
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter (counter += 1)
    console.log (counter)
    
  }

  const removeValue = () => {
    setCounter (counter -= 1)
    console.log (counter)
    
  }

  return (
    <>
      <h1>React course with André {counter}</h1>
      <h2>Counter value:</h2>
      <button
      onClick={addValue}
      >Add value</button> {}
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer:</p>
    </>
  )
}

export default App
