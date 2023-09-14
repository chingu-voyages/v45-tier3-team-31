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
  const {id} = req.params
  const aClass = await Class.findOne({ where: { id } });
  if (!aClass) {
    throw new NotFound(`No class with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ success: true, aClass });
};
const createClass = async (req, res) => {
  const aClass = await Class.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ success: true, aClass });
};
const updateClass = async (req, res) => {
  const {
    
    params: { id },
  
  } = req;
  const job = await Class.update(
    { ...req.body },
    { where: { id} })
  res.status(StatusCodes.OK).json({ success: true, job });
};
const deleteClass = async (req, res) => {
  const {
    params: { id,classId},
  
  } = req;
  const aClass = await Job.destroy({ where: { id } });
  if (!aClass) {
    throw new NotFound(`No class with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ msg: "class deleted" });
};
module.exports = {
  getAllClasses,
  getSingleClass,
  createClass,
  updateClass,
  deleteClass,
};
