const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

//unabling cross-origin
const app = express();
app.use(cors());

//Creating connection with mysql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", //Add your username
  password: "797690", // Enter your password
  database: "blog", //Enter DB name
  connectionLimit: 10,
});

//Connecting to mysql
db.connect((err) => {
  if (err) {
    console.error("Error Connecting to MySQL", err.message);
  } else {
    console.log("Connect to MySQL Succesfull");
  }
});

app.get("/", (req, res) => res.send("Hello World"));

//Fetching data on /api/posts route
app.get("/api/posts", (req, res) => {
  //Select query for fetching all product form database
  const sql = "SELECT * FROM posts";
  db.query(sql, (err, results) => {
    if (err) {
      //If any error than showing status code 500
      res.status(500).send("Error Fetching Posts from database");
    } else {
      //Sending data to /api/posts route
      res.json(results);
    }
  });
});

//Fetching details of a specific post
app.get("/api/posts/:id", (req, res) => {
  const postId = req.params.id;
  const sql = "SELECT * FROM posts WHERE id = ?";

  db.query(sql, [postId], (err, results) => {
    if (err) {
      //If any error than showing status code 500
      res.status(500).send("Error Fetching Post from database");
    } else {
      if (results.length > 0) {
        //If found than showing the first post
        res.json(results[0]);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    }
  });
});

//Running the port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
