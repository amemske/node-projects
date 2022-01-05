//create a function set to a variable - not found
//the function will send a custom message
//the func will also have a status of 404
//export the func

const notFound = (req, res) => res.status(404).send('Route does not exist');

module.exports = notFound;
