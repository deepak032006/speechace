const express = require("express");
const cors = require("cors");
const path = require("path");
const data = require("./data.json");

const app = express();
app.use(cors());

app.use("/audio", express.static(path.join(__dirname, "audio")));

app.get("/api/report", (req, res) => {
  res.json(data);
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
