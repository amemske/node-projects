var express = require('express');
var app = express();

//app.get
app.get('/', (req, res) => {
  res.send('Home page');
});
app.get('/about', (req, res) => {
  res.status(200).send('about page');
});
//app.post
//app.put
//app.delete
//app.all
app.all('*', (req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});
//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
