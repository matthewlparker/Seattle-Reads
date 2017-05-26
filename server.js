'use strict';

const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('./public'));

app.get('*', (request, response) =>
  response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function() {

  console.log('My Portfolio is open on port: ' + PORT);
});
