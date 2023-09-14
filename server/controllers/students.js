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
  const job = await Job.findOne({ where: { id: JobId, UserId } });
  if (!job) {
    throw new NotFound(`No job with id ${JobId}`);
  }
  res.status(StatusCodes.OK).json({ success: true, job });
};
const createStudent = async (req, res) => {
  const student = await Student.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ success: true, student });
};
const updateStudent = async (req, res) => {
  const {
    body: { company, position },
    params: { id: JobId },
    user: { id: UserId },
  } = req;
  const job = await Job.update(
    { ...req.body },
    { where: { id: JobId, UserId } }
  );
  if (!company && !position) {
    throw new BadRequest("Please provide company or/and position");
  }
  if (!job[0]) {
    throw new NotFound(`No job with id ${JobId}`);
  }
  res.status(StatusCodes.OK).json({ success: true, job });
};
const deleteStudent = async (req, res) => {
  const {
    params: { id: JobId },
    user: { id: UserId },
  } = req;
  const job = await Job.destroy({ where: { id: JobId, UserId } });
  if (!job) {
    throw new NotFound(`No job with id ${JobId}`);
  }
  res.status(StatusCodes.OK).json({ msg: "job deleted" });
};
module.exports = {
  getAllStudent,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
