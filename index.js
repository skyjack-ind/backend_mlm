require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Route = express.Router();
const cors = require("cors");
const morgan = require("morgan");
const routerNavigation = require("./src/index");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

const server = app.listen(
  process.env.SERVER_PORT || 3001,
  process.env.SERVER_ADDRESS || "127.0.0.1",
  function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Listen on Host : ${host}, Port ${port}`);
  }
);

app.use(morgan("dev"));
app.use("/", routerNavigation);
