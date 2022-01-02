var express = require('express');
var app = express();
let { people } = require('./data');

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
