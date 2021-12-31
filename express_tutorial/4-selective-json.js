var express = require('express');
var app = express();
const { products } = require('./data');

//home page
app.get('/', (req, res) => {
  res.send('<h2>Home page</h2><a href="/api/products">Products</a>');
});

//select products you want to return
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    //get only the items you need
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
