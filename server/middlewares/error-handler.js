const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || err,
  };
  if (err.name === "SequelizeValidationError") {
    customError.message = err.errors.map((error) => error.message).join(", ");
  }
  // return res.status(customError.statusCode).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.message });
};

module.exports = errorHandler;
