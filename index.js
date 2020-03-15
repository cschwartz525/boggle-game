const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.listen(config.port, () => {
    console.log(`App is listneing on port ${config.port}`);
});