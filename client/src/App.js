import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './assets/css/output.css';
function App() {
    const [message, setMessage] = useState('What is up fam');
    const [msg, setMsg] = useState('What');
    const sendMsg = async () => {
        try {
            // Await response from fetch call
            const apiUrl = import.meta.env.VITE_REACT_APP_URL || '';
            const response = await fetch(`${apiUrl}/api/hello`);
            const res = await fetch(`${apiUrl}/api/what`);
            // Await the text conversion from the response
            const text = await response.text();
            const textTwo = await res.text();
            // Set the message state with the fetched text
            setMessage(text);
            setMsg(textTwo);
        }
        catch (error) {
            console.error('Error fetching message:', error);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col justify-center", children: ["Your Server Message fam is: ", message, _jsx("br", {}), "Your Second Server Message fam is: ", msg, _jsx("button", { className: "btn bg-primary", children: "Click Me Shawrty!" })] }) }));
}
export default App;
