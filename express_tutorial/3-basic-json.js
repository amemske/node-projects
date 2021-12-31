var express = require('express');
var app = express();
const products = require('./data');

//json
app.get('/', (req, res) => {
  res.json(products);
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});

/* API VS SSR (Server Side Rendering)

API
-JSON
-Send Data 
res.json()
SSR 
-Templates
- Send Templates 
- res.render */
