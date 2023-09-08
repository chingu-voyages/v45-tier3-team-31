// const StudentGrade = require("../models/studentgrade");

const getAllStudentGrade = async (req, res) => {
  return res.status(200).json({ msg: "getAllStudentGrade" });
};

const createStudentGrade = async (req, res) => {
  return res.status(200).json({ msg: "createStudentGrade" });
};

const getSingleStudentGrade = async (req, res) => {
  return res.status(200).json({ msg: "getSingleStudentGrade" });
};

const updateStudentGrade = async (req, res) => {
  return res.status(200).json({ msg: "updateStudentGrade" });
};

const deleteStudentGrade = async (req, res) => {
  return res.status(200).json({ msg: "deleteStudentGrade" });
};

module.exports = {
  getAllStudentGrade,
  createStudentGrade,
  getSingleStudentGrade,
  updateStudentGrade,
  deleteStudentGrade,
};
