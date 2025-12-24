import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/',(req, res)=>{
    res.send('Welcome to the Subscription Tracker API!');
});

const hostname = 'localhost';

app.listen(PORT, hostname, () => {
    console.log(`Subscription Tracker API is running on http://${hostname}:${PORT}`);
});

export default app;