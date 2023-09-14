const {
  getAllStudent,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/students");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllStudent).post(createStudent);
router
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);
module.exports = router;
