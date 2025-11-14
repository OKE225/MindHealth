const express = require("express");
const cors = require("cors");
const fs = require("fs");
const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "MindHealth API is running" });
});

app.get("/api/mindfulness", (req, res) => {
  const exercisesList = JSON.parse(
    fs.readFileSync("./mindfulness-exercises-list.json", "utf-8")
  );

  res.json(exercisesList);
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
