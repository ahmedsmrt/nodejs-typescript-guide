"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module along with 'Request' and 'Response' types from express
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Create an Express application
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Specify the port number for the server
var port = 3000;
var dynamicMsg = "What's good with you fam";
// Define a route for the root path ('/')
app.get('/api/hello', function (req, res) {
    // Send a response to the client
    res.send(dynamicMsg);
});
// Define a route for the root path ('/')
app.get('/api/what', function (req, res) {
    // Send a response to the client
    res.send("What is wrong with you fam");
});
// Start the server and listen on the specified port
app.listen(port, function () {
    // Log a message when the server is successfully running
    console.log("Server is running on http://localhost:".concat(port));
});
