// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';


const path = require('path');

const viewsPath = path.join(__dirname, '../src/views');



// Create an Express application
const app = express();

app.set('views', viewsPath);

// Define a route to render the index.html
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(viewsPath, 'index.html'));
});

// Define a route to render the index.html
app.get('/hello', (req: Request, res: Response) => {
    res.sendFile(path.join(viewsPath, 'hello.html'));
});

// Set up a static files directory (optional, for serving CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Specify the port number for the server
const port: number = 3000;
const dynamicMsg: string = "<h1>What's good with you fam</h1>";

// Define a route for the root path ('/')
app.get('/hello', (req: Request, res: Response) => {
    // Send a response to the client
    res.send(dynamicMsg);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});