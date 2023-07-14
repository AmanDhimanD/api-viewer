const express = require("express");
const sql = require("msnodesqlv8");
const app = express();

const connectionString =
  "server=DESKTOP-50T6J1U\\SQLEXPRESS;Database=ztester;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

// Require the upload middleware
const upload = require("./upload.js");
// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
  const query = "SELECT * FROM FirstTable";
  sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  const filePath = req.file.path;
  console.log("File path:", filePath);

  const query = `INSERT INTO FirstTable (id, name) VALUES (3, N'${filePath}')`;

  sql.query(connectionString, query, (err, rows) => {
    if (err) {
      console.error("Error:", err.message);
      res.sendStatus(500);
    } else {
      console.log("Data inserted successfully!");
      res.json({ message: "File uploaded and data inserted successfully!" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server Start");
});
