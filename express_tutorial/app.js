var express = require('express');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
var app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({ extended: false }));

app.use('/api/people', people);
app.use('/login', auth);

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
