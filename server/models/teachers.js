const useBcrypt = require("sequelize-bcrypt");
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "teacher",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "teacher",
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
  return Teacher;
};
