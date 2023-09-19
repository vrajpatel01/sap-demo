const { ValidationError } = require("joi");

const errorHandler = (error, req, res, next) => {
  let data = {
    message: error,
    originalError: error.message,
  };

  if (error instanceof ValidationError) {
    errorCode = 422;
    data = {
      message: err.message,
    };
  }

  return res.json({ data, "hello": "hello" });
};

module.exports = errorHandler;
