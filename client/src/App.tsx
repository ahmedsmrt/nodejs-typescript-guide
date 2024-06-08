import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('What is up fam')
  const [msg, setMsg] = useState('What')



  const sendMsg = async () => {
    try {
      // Await response from fetch call
      const apiUrl = import.meta.env.VITE_REACT_APP_URL || '';
      const response: Response = await fetch(`${apiUrl}/api/hello`);
      const res: Response = await fetch(`${apiUrl}/api/what`);

      // Await the text conversion from the response
      const text: string = await response.text();
      const textTwo: string = await res.text();

      // Set the message state with the fetched text
      setMessage(text);
      setMsg(textTwo);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={sendMsg}>
          Your Server Message fam is: {message}<br></br>
          Your Second Server Message fam is: {msg}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
