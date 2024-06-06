"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module along with 'Request' and 'Response' types from express
const express_1 = __importDefault(require("express"));
const path = require('path');
const viewsPath = path.join(__dirname, '../src/views');
// Create an Express application
const app = (0, express_1.default)();
app.set('views', viewsPath);
// Define a route to render the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'index.html'));
});
// Define a route to render the index.html
app.get('/hello', (req, res) => {
    res.sendFile(path.join(viewsPath, 'hello.html'));
});
// Set up a static files directory (optional, for serving CSS, JS, images, etc.)
app.use(express_1.default.static(path.join(__dirname, 'public')));
// Specify the port number for the server
const port = 3000;
const dynamicMsg = "<h1>What's good with you fam</h1>";
// Define a route for the root path ('/')
app.get('/hello', (req, res) => {
    // Send a response to the client
    res.send(dynamicMsg);
});
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
