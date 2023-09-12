const express = require("express");
const {connectDB} = require("./DB/connect");
const app = express();
const notFound = require("./middlewares/not-found");
const studentGrade = require("./routers/studentGrade");
const teachers = require("./routers/teachers");
//middleware
app.use(express.json());

//routes
app.get("/", (req, res) =>
  res.send(`    <h1>
Chingu Voyage 44 Team 31 Educator Star
<a href="api/v1/studentgrade">API </a>
</h1>`)
);

// student grade routes
app.use("/api/v1/studentgrade", studentGrade);
app.use("/api/v1/teachers", teachers)
//not found
app.use(notFound);
//error handler

// Start the server
const PORT = process.env.DB_PORT || 3000;

const start = () => {
  try {
    connectDB();
    app.listen(PORT, console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
