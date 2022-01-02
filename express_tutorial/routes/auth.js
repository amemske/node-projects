var express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.send(`Welcome ${name}`);
  }
  res.status(401).send('Please provide credentials');
});

module.exports = router;
