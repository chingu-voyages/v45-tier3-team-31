const useBcrypt = require("sequelize-bcrypt");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.POSGRESQL_URI);
const Teacher = sequelize.define(
  "teacher",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter a username",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Please enter an email",
        },
        notEmpty: {
          msg: "Please enter an email",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: "password requires at least 6 characters",
        },
        notEmpty: {
          msg: "Please enter a password",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "Teacher",
    tableName: "teacher",
  }
);
const syncTable = async () => {
  await Teacher.sync({ alter: true });
};
syncTable();
useBcrypt(Teacher, {
  field: "password",
  rounds: 12,
  compare: "authenticate",
});

module.exports = Teacher;
