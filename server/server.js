const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
app.use(bodyParser.json());

// Database configuration
const dbConfig = {
  user: "postgres",
  password: "OtVuWrsmK6MsUZDbRRk5",
  host: "containers-us-west-210.railway.app",
  port: 7632, // PostgreSQL default port
  database: "railway",
};

// Create a database connection pool
const pool = new Pool(dbConfig);

// Define routes

// Get all student grades
app.get("/studentgrades", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM StudentGrade");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new student grade
app.post("/studentgrades", async (req, res) => {
  const { class_id, student_id, date, note, status } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO StudentGrade (class_id, student_id, date, note, status) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [class_id, student_id, date, note, status]
    );

    const insertedId = result.rows[0].id;
    res.json({ id: insertedId, message: "Student grade created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a student grade
app.put("/studentgrades/:criteria_id", async (req, res) => {
  const gradeId = req.params.criteria_id;
  const { class_id, student_id, date, note, status } = req.body;

  try {
    await pool.query(
      "UPDATE StudentGrade SET class_id = $1, student_id = $2, date = $3, note = $4, status = $5 WHERE criteria_id = $6",
      [class_id, student_id, date, note, status, gradeId]
    );

    res.json({ id: gradeId, message: "Student grade updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a student grade
app.delete("/studentgrades/:criteria_id", async (req, res) => {
  const gradeId = req.params.criteria_id;

  try {
    await pool.query("DELETE FROM StudentGrade WHERE criteria_id = $1", [
      gradeId,
    ]);
    res.json({ id: gradeId, message: "Student grade deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 7632;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
