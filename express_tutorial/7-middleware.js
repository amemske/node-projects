var express = require('express');
var app = express();

const logger = require('./logger');
//middleware
app.use(logger); // appies to all paths
//app.use('/api', logger); option 2

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
