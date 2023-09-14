const { StatusCodes } = require("http-status-codes");
const Class = require("../models/classes");
const { NotFound, BadRequest } = require("../errors");
const Student = require("../models/students");
const getAllClasses = async (req, res) => {
  const classes = await Class.findAll({ include: Student });
  res
    .status(StatusCodes.OK)
    .json({ success: true, amount: classes.length, classes });
};
const getSingleClass = async (req, res) => {
  const job = await Job.findOne({ where: { id: JobId, UserId } });
  if (!job) {
    throw new NotFound(`No job with id ${JobId}`);
  }
  res.status(StatusCodes.OK).json({ success: true, job });
};
const createClass = async (req, res) => {
  const aClass = await Class.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ success: true, aClass });
};
const updateClass = async (req, res) => {
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
const deleteClass = async (req, res) => {
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
  getAllClasses,
  getSingleClass,
  createClass,
  updateClass,
  deleteClass,
};
