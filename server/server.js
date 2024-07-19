import express from "express";
import mysql from "mysql2";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.listen(8000, () => {
  console.log("listening on port 8000");
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to mysql database");
  });
});

app.get("/", (req, res) => {
  const sql2 = "SELECT * FROM music_event.artist";
  db.query(sql2, (err, result) => {
    if (err) return res.json({ Message: "err inside server" });
    return res.json(result);
  });
});

app.post("/create", (req, res) => {
  const sql2 =
    "INSERT INTO music_event.artist (`Artist_ID`,`Artist_FirstName`,`Artist_LastName`,`Artist_Email`,`Artist_Band_ID`,`Artist_Contact_No`,`Organizer_ID`)VALUES (?)";
  const values = [
    req.body.Artist_ID,
    req.body.Artist_FirstName,
    req.body.Artist_LastName,
    req.body.Artist_Email,
    req.body.Artist_Band_ID,
    req.body.Artist_Contact_No,
    req.body.Organizer_ID,
  ];
  db.query(sql2, [values], (err, result) => {
    if (err) return res.json({ Message: "err inside server", err: err });
    return res.json(result);
  });
});

app.get("/view/:id", (req, res) => {
  const sql2 = "SELECT * FROM music_event.artist WHERE Artist_ID = ? ";
  const id = req.params.id;
  db.query(sql2, [id], (err, result) => {
    if (err) return res.json({ Message: "err inside server" });
    return res.json(result);
  });
});

app.put("/edit/:id", (req, res) => {
  const sql2 =
    "UPDATE music_event.artist SET `Artist_FirstName`=?,`Artist_LastName`=?,`Artist_Email`=?,`Artist_Band_ID`=?,`Artist_Contact_No`=?,`Organizer_ID`=? WHERE Artist_ID=?";
  const values = [
    req.body.Artist_FirstName,
    req.body.Artist_LastName,
    req.body.Artist_Email,
    req.body.Artist_Band_ID,
    req.body.Artist_Contact_No,
    req.body.Organizer_ID,
    req.params.id,
  ];
  db.query(sql2, values, (err, result) => {
    if (err)
      return res.status(500).json({ Message: "Error inside server", err: err });
    return res.status(200).json(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql2 = "DELETE FROM music_event.artist WHERE Artist_ID = ?";
  const id = req.params.id;
  db.query(sql2, [id], (err, result) => {
    if (err) return res.json({ Message: "err inside server" });
    return res.json(result);
  });
});
