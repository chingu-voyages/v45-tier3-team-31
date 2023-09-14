const Teacher = require("../models/teachers");
const { StatusCodes } = require("http-status-codes");

const { BadRequest, Unauthenticated } = require("../errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please provide email and password");
  }
  const user = await Teacher.findOne({ where: { email } });
  if (!user) {
    throw new Unauthenticated("Wrong email");
  }
  const isCorrectPassword = user.authenticate(password);
  if (!isCorrectPassword) {
    throw new Unauthenticated("Wrong password");
  }
  const token = jwt.sign(
    { userID: user.id, userName: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  res.status(StatusCodes.OK).json({ name: user.name, token });
};
const register = async (req, res) => {
  const user = await Teacher.create({ ...req.body });
  const token = jwt.sign(
    { userID: user.id, userName: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

const getAllTeachers = async (req, res) => {
  try {
    const teacherData = await Teacher.findAll({
      order: [["id", "ASC"]],
    });
    return res.status(200).json({ teachers: teacherData });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const createTeacher = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newTeacher = await Teacher.create({
      username,
      email,
      password,
    });
    return res.status(201).json({ teachers: newTeacher });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    return res.status(200).json({ teacher });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRowsCount = await Teacher.update(req.body, {
      where: { id },
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    return res.status(200).json({ msg: "Teacher updated successfully" });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTeacher = await Teacher.destroy({ where: { id } });
    if (!deletedTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    return res.status(200).json({ msg: "Teacher deleted successfully" });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  login,
  register,
};
