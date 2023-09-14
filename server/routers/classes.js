const {
  getAllClasses,
  getSingleClass,
  createClass,
  updateClass,
  deleteClass,
} = require("../controllers/classes");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllClasses).post(createClass);
router.route("/:id").get(getSingleClass).patch(updateClass).delete(deleteClass);
module.exports = router;
