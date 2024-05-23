const express = require('express');
const homeRoute = require('./routes/home-route');
const logger = require('./logger/logger');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', homeRoute);
app.use('/**', (req, res) => {
    res.status(404).json({ message: 'not found' });
});

app.listen(port, () => {
    logger.info(`App is listening to port ${port}`);
});