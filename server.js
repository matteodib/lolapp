//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files form the dist directory
app.use(express.static('./dist/lolapp/'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/lolapp/'}),
);

app.listen(process.env.PORT || 8080);
