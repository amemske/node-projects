var express = require('express');
var app = express();

const logger = require('./logger');
const authorize = require('./authorize');
//middleware
app.use([logger, authorize]); // appies to all paths
//app.use('/api', logger); option 2

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

// you can also pass middleware to only a specific route
app.get('/api/products', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Items');
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
