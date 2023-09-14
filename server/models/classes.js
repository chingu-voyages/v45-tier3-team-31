const { Sequelize, DataTypes } = require("sequelize");
const Student = require("./students");

const sequelize = new Sequelize(process.env.POSGRESQL_URI);
const Class = sequelize.define(
  "class",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter a class name",
        },
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: "Invalid Date Format",
        },
        notEmpty: {
          msg: "Please enter date",
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["ongoing", "closed"]],
          msg: `ongoing or closed for class status`,
        },
        notEmpty: {
          msg: "Please enter a status",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "Class",
    tableName: "class",
  }
);
Class.hasMany(Student);
Student.belongsTo(Class);
const syncTable = async () => {
  await Class.sync({ alter: true });
};
// syncTable();

module.exports = Class;
