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

//single product -params
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('product does not exist');
  }
  return res.json(singleProduct);
});

//complex params
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  return res.send('sample review');
});

//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
