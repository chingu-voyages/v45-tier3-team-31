const { Sequelize } = require("sequelize");
require("dotenv").config();
// please change connection string later
const sequelize = new Sequelize(process.env.POSGRESQL_URI);
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error.message);
  }
};

module.exports = { connectDB };
