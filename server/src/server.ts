// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import cors from "cors";

// Create an Express application
const app = express();

app.use(cors());

// Specify the port number for the server
const port: number = 3000;
const dynamicMsg: string = "What's good with you fam";

// Define a route for the root path ('/')
app.get('/api/hello', (req: Request, res: Response) => {
    // Send a response to the client
    res.send(dynamicMsg);
});


// Define a route for the root path ('/')
app.get('/api/what', (req: Request, res: Response) => {
    // Send a response to the client
    res.send("What is wrong with you fam");
});


// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});