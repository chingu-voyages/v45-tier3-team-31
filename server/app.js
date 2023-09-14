const express = require("express");
const { connectDB } = require("./DB/connect");
const app = express();
require("dotenv").config();
require("express-async-errors");
const notFound = require("./middlewares/not-found");
const studentGrade = require("./routers/studentGrade");
const teachers = require("./routers/teachers");
const classes = require("./routers/classes");
const students = require("./routers/student");
const authMiddleware = require("./middlewares/authorization");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const cors = require("cors");
// security packages
app.use(cors());
//middleware
app.use(express.json());

//routes
app.get("/", (req, res) =>
  res.send(`    <h1>
Chingu Voyage 44 Team 31 Educator Star
<a href="api/v1/teachers">API </a>
</h1>`)
);
//teacher route + authorization
app.use("/api/v1/teachers", teachers);
//classes route
app.use("/api/v1/classes", authMiddleware, classes);
//students route
app.use("/api/v1/students", authMiddleware, students);
// student grade routes
app.use("/api/v1/studentgrade", authMiddleware, studentGrade);

//not found
app.use(notFound);
//error handler
app.use(errorHandlerMiddleware);
// Start the server
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
