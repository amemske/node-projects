var express = require('express');
const res = require('express/lib/response');
var path = require('path');
var app = express();

//location of the assets
app.use(express.static('./public'));
//by default inside public - express will look for index.html

//get
//you can use join or resolve
/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './navbar-app/index.html'));
}); */

//all
app.get('*', (req, res) => {
  res.status(404).send('resource not found');
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
