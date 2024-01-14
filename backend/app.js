const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const categoryRouter = require("./routes/categoryRouter");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

module.exports = app;
