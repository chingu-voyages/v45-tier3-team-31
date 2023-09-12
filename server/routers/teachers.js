const express = require("express");
const router = express.Router();
const {
  getAllTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  login,
  register,
} = require("../controllers/teachers");
router.route("/").get(getAllTeachers).post(createTeacher);
router
  .route("/:id")
  .get(getTeacherById)
  .patch(updateTeacher)
  .delete(deleteTeacher);
router.route("/login").post(login);
router.route("/register").post(register);
module.exports = router;
