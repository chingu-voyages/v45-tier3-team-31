const { Sequelize } = require("sequelize");
// please change connection string later
const sequelize = new Sequelize(
  "postgresql://postgres:Chbjbbm5t1TJXRdWH5O7@containers-us-west-135.railway.app:6540/railway"
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connect to DB");
  } catch (error) {
    console.log("unable to connect to DB");
  }
};

module.exports = connectDB;
