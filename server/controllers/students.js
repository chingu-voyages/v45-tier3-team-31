const { StatusCodes } = require("http-status-codes");
const Class = require("../models/classes");
const { NotFound, BadRequest } = require("../errors");
const Student = require("../models/students");
const getAllStudent = async (req, res) => {
  const { classId } = req.query;
  let queryObject = {};
  if (classId) {
    queryObject.classId = classId;
  }
  const students = await Student.findAll({ where: { ...queryObject } });
  res
    .status(StatusCodes.OK)
    .json({ success: true, amount: students.length, students });
};
const getSingleStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findOne({ where: { id: id } });
  if (!student) {
    throw new NotFound(`No student with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ success: true, student });
};
const createStudent = async (req, res) => {
  const student = await Student.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ success: true, student });
};
const updateStudent = async (req, res) => {
  const {
    params: { id },
  } = req;
  const student = await Student.update({ ...req.body }, { where: { id: id } });
  if (!student[0]) {
    throw new NotFound(`No student with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ success: true, msg: "updated" });
};
const deleteStudent = async (req, res) => {
  const {
    params: { id },
  } = req;
  const student = await Student.destroy({ where: { id: id } });
  if (!student) {
    throw new NotFound(`No student with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ msg: "student deleted" });
};
module.exports = {
  getAllStudent,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
