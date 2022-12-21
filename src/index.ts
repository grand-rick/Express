import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome, This is the homepage');
});

app.get('/api', (req, res) => {
    res.send('Server Working here');
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});