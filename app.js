'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  console.log("test")
  res.send('Hello World from IBM Cloud Essentials!');
})

app.get('/hello', (req, res) => {
  console.log("test hello")
  res.send('Hello World!');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
