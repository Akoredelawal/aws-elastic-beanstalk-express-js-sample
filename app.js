const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('i did this myself mahad!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
