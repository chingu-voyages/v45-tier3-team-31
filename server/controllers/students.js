const { StatusCodes } = require("http-status-codes");
const Class = require("../models/classes");
const { NotFound, BadRequest } = require("../errors");
const Student = require("../models/students");
const getAllStudent = async (req, res) => {
  const { classId } = req.body;
  const students = await Student.findAll({ where: { classId } });
  res
    .status(StatusCodes.OK)
    .json({ success: true, amount: students.length, students });
};
const getSingleStudent = async (req, res) => {
  const {id,classId} = req.params
  const student = await Student.findOne({ where: { id, classId } });
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
    
    params: { id,classId },
    
  } = req;
  const student = await Student.update(
    { ...req.body },
    { where: { id, classId } }
  )
  if (!student[0]) {
    throw new NotFound(`No student with id ${id}`)
  }
  res.status(StatusCodes.OK).json({ success: true, job });
};
const deleteStudent = async (req, res) => {
  const {
    params: { id,classId},
    
  } = req;
  const student = await Student.destroy({ where: { id,classId } });
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
