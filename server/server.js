const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "MindHealth API is running" });
});

app.get("/api/mindfulness", (req, res) => {
  const filePath = path.join(__dirname, "mindfulness-exercises-list.json");

  const exercisesList = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  res.json(exercisesList);
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
