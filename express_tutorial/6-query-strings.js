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

// query strings - search and limit products
app.get('/api/v1/query', (req, res) => {
  //console.log(req.query)
  const { search, limit } = req.query; // this is what you are expecting as the query strings
  let sortedProducts = [...products]; // copy all the products
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    return (sortedProducts = sortedProducts.slice(0, Number(limit)));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('Sorry no products matched your search'); //option 1
    return res.status(200).json({ success: true, data: [] }); //option 2
  }
  return res.status(200).json(sortedProducts); // default case
});
//app.listen
app.listen(5000, () => {
  console.log('port is listening on port 5000');
});
