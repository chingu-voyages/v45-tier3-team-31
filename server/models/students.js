const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.POSGRESQL_URI);
const Student = sequelize.define(
  "student",
  {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter a student name",
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter a student name",
        },
      },
    },
    parent_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter a phone number",
        },
        len: {
          args: [10],
          msg: `phone number requires at least 10 characters`,
        },
      },
    },
    attended_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: "Invalid Date Format",
        },
        notEmpty: {
          msg: "Please enter a date",
        },
      },
    },
    classId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Please enter a class Id",
        },
      },
      references: {
        model: "class",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Student",
    tableName: "student",
  }
);
const syncTable = async () => {
  await Student.sync({ alter: true });
};
// syncTable();

module.exports = Student;
