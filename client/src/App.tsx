import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/output.css'

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
      <main className="flex flex-col justify-center w-full h-full items-center mx-auto">
        Your Server Message fam is: {message}<br></br>
        Your Second Server Message fam is: {msg}

        <button className="btn bg-primary border-0" onClick={sendMsg}>Click Me Shawrty!</button>
      </main>
    </>
  )
}

export default App
