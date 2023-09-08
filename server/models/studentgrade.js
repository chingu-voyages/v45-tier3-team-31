const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("connection string");

const studentGrade = sequelize.define(
  "StudentGrade",
  {},
  { modelName: "StudentGrade", tableName: "StudentGrade" }
);
const syncTable = async () => {
  await studentGrade.sync({ alter: true });
};
syncTable();
module.exports = studentGrade;
