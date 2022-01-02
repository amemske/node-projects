var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home');
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
