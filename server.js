const express = require('express');
const app = express();
const http = require('http');
const port = 8000;

app.use(express.static('public'));

http.createServer(app).listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});