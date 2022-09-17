import express from "express";
import mysql from "mysql2";

const PASS = "MySQL$100"

const router = express.Router();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: PASS,
  database: "wastedb",
});

connection.connect();

router.get("/bins", (req, res, next) => {
  connection.query("SELECT * FROM bins", (err, rows, fields) => {
    if (err) throw err;

    res.send(rows);
  });
});

// router.post(
//   "/name/:name/latitude/:latitude/longitude/:longitude",
//   (req, res, next) => {
//     const name = req.params.name;
//     const latitude = parseFloat(req.params.latitude);
//     const longitude = parseFloat(req.params.longitude);

//     const store = { name: name, latitude: latitude, longitude: longitude };

//     connection.query(
//       `INSERT INTO stores (name, latitude, longitude) VALUES ('${name}', ${latitude}, ${longitude})`,
//       (err, rows, fields) => {
//         if (err) throw err;

//         res.send(rows);
//       }
//     );
//   }
// );

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
});

// connection.end();

export default router;
