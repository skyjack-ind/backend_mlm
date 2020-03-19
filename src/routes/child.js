const express = require("express");
const Route = express.Router();
const { getAllChild } = require("../controller/child");

Route.get("/:id", getAllChild);

module.exports = Route;
