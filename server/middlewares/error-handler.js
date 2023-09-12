const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: err.message });
};

module.exports = errorHandler;
