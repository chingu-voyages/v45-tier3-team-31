const express = require("express");
const router = express.Router();
const {
    getAllTeachers,
    createTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
} = require("../controllers/teachers");
router.route("/").get(getAllTeachers).post(createTeacher);
router
  .route("/:id")
  .get(getTeacherById)
  .patch(updateTeacher)
  .delete(deleteTeacher);
module.exports = router;
