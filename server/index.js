const express = require("express");
const cors = require("cors");
const connection = require("./Config/config");
const userController = require("./Controllers/User.controller");
const dataController = require("./Controllers/Data.controller");
const authentication = require("./Middlewares/Authentication");
require("dotenv").config();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/user", userController);

app.use(authentication);

app.use("/data", dataController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log("Something running at 8000");
});
