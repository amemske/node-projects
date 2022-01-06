//custom midddleware error handler
const { CustomAPIError } = require('../errors/custom-errors');
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    //here the message and status are handled by inbuilt js constructor instead of moongose
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again' });
};

module.exports = errorHandler;
