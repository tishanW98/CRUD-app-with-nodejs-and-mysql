import express from "express";
import mysql from "mysql2";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Routes
app.get("/", (req, res) => {
  const sql = "SELECT * FROM music_event.artist";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ Message: "Error inside server" });
    return res.status(200).json(result);
  });
});

app.post("/create", (req, res) => {
  const sql = `
    INSERT INTO music_event.artist 
    (
      Artist_ID, Artist_FirstName, Artist_LastName, 
      Artist_Email, Artist_Band_ID, Artist_Contact_No, Organizer_ID
    ) 
    VALUES (?)
  `;
  const values = [
    req.body.Artist_ID,
    req.body.Artist_FirstName,
    req.body.Artist_LastName,
    req.body.Artist_Email,
    req.body.Artist_Band_ID,
    req.body.Artist_Contact_No,
    req.body.Organizer_ID,
  ];
  db.query(sql, [values], (err, result) => {
    if (err)
      return res.status(500).json({ Message: "Error inside server", err: err });
    return res.status(200).json(result);
  });
});

app.get("/view/:id", (req, res) => {
  const sql = "SELECT * FROM music_event.artist WHERE Artist_ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ Message: "Error inside server" });
    return res.status(200).json(result);
  });
});

app.put("/edit/:id", (req, res) => {
  const sql = `
    UPDATE music_event.artist SET 
      Artist_FirstName=?, Artist_LastName=?, Artist_Email=?, 
      Artist_Band_ID=?, Artist_Contact_No=?, Organizer_ID=? 
    WHERE Artist_ID=?
  `;
  const values = [
    req.body.Artist_FirstName,
    req.body.Artist_LastName,
    req.body.Artist_Email,
    req.body.Artist_Band_ID,
    req.body.Artist_Contact_No,
    req.body.Organizer_ID,
    req.params.id,
  ];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.status(500).json({ Message: "Error inside server", err: err });
    return res.status(200).json(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM music_event.artist WHERE Artist_ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ Message: "Error inside server" });
    return res.status(200).json(result);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
