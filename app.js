import express from 'express';

const app = express();

app.get('/',(req, res)=>{
    res.send('Welcome to the Subscription Tracker API!');
});

const port = 3000;
const hostname = 'localhost';

app.listen(port, hostname, () => {
    console.log(`Subscription Tracker API is running on http://${hostname}:${port}`);
});

export default app;