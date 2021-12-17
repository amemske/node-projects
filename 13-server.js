const http = require('http');

const server = http.createServer((req, res) => {
  // res.write('Welcome to our home page');

  if (req.url === '/') {
    res.write('Welcome to our home page');
    res.end();
  }
  if (req.url === '/about') {
    res.write('About us');
    res.end();
  } else {
    res.write('Oops');
    res.end();
  }
});

server.listen(5000);
