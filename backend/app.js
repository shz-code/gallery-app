const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const categoryRouter = require("./routes/categoryRouter");
const imageRouter = require("./routes/imageRouter");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/category", categoryRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

module.exports = app;
