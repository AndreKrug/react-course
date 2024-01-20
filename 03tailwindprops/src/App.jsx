/* import { useState } from 'react'*/
import './App.css'
import Card from './components/Card'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-300 p-3 rounded-md'>User in Department</h1>
      <Card username="André Krug" post="Head of Department IT-Development" />
      <Card username="Alessandro Krug"/>
      <Card />
    </>
  )
}

export default App
