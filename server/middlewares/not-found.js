const errorHandler = (req, res, next) => {
  return res.status(404).json({ msg: "route does not exist" });
};

module.exports = errorHandler;
