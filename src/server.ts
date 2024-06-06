import express from 'express';


const app = express();

const port = 3000;

app.get('/', (req, res) => {

    res.send('Hello, thurr look at you using typescript,node and express')
})

app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});