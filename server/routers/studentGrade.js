const express = require("express");
const router = express.Router();
const {
  getAllStudentGrade,
  createStudentGrade,
  getSingleStudentGrade,
  updateStudentGrade,
  deleteStudentGrade,
} = require("../controllers/studentgrade");
router.route("/").get(getAllStudentGrade).post(createStudentGrade);
router
  .route("/:id")
  .get(getSingleStudentGrade)
  .patch(updateStudentGrade)
  .delete(deleteStudentGrade);
module.exports = router;
