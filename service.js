'use strict';

const express = require('express');

// Constants
//const PORT = 8080;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/serviceB', (req, res) => {
  console.log("ServiceB: Creating random number")
  res.send(Math.floor(Math.random() * Math.floor(1000))+"");
});

app.listen(process.env.PORT);
console.log(`Running on Port `,process.env.PORT);