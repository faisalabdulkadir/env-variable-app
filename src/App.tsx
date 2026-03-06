import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const envVariables = {
    MODE: import.meta.env.MODE,
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
    VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
  }

  console.log('Loaded env variables:', envVariables)

  return (
    <main className="card">
      <h1>{envVariables.VITE_APP_TITLE}</h1>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        count is {count}
      </button>
      <p>API URL: {envVariables.VITE_API_URL}</p>
    </main>
  )
}

export default App
