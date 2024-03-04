import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [schuhgroesse, setSchuhgroesse] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password, schuhgroesse})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        />
        {" "}
        <input
        type="text" 
        value={schuhgroesse}
        onChange={(e) => setSchuhgroesse(e.target.value)}
        placeholder='Schuhgröße'
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login


