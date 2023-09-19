const { StatusCodes } = require("http-status-codes");
const Class = require("../models/classes");
const { NotFound, BadRequest } = require("../errors");
const Student = require("../models/students");
const { Op } = require("sequelize");
const getAllClasses = async (req, res) => {
  const { search } = req.query;
  let queryObject = {};
  if (search) {
    queryObject.name = { [Op.iLike]: `%${search}%` };
  }
  const classes = await Class.findAll({ include: Student, where: queryObject });
  res
    .status(StatusCodes.OK)
    .json({ success: true, amount: classes.length, classes });
};
const getSingleClass = async (req, res) => {
  const { id } = req.params;
  const aClass = await Class.findOne({
    where: { id: id },
    include: {
      model: Student,
      attributes: { exclude: ["createdAt", "updatedAt", "classId"] },
    },
  });
  if (!aClass) {
    throw new NotFound(`No class with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ success: true, aClass });
};
const createClass = async (req, res) => {
  if (req.body.length > 0) {
    const classes = await Class.bulkCreate(req.body);
    return res.status(StatusCodes.CREATED).json({ success: true, classes });
  }
  const aClass = await Class.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ success: true, aClass });
};
const updateClass = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const aClass = await Class.update({ ...req.body }, { where: { id: id } });
  if (!aClass[0]) {
    throw new NotFound(`No class with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ success: true, msg: "Updated" });
};
const deleteClass = async (req, res) => {
  const {
    params: { id },
  } = req;
  const aClass = await Class.destroy({ where: { id: id } });
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
