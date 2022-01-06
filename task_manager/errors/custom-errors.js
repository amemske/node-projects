//custom error class

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message); //super involkes property "message" of  the parent which is Error
    this.statusCode = statusCode;
  }
}

//create a method that instantiates the class
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = { createCustomError, CustomAPIError };
