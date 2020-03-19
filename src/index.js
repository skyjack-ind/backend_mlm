const express = require("express");
const Route = express.Router();
const child = require("./routes/child");

Route.use("/child", child);

module.exports = Route;
