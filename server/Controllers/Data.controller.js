const express = require("express");

const DataModel = require("../Model/Data.model");

const dataController = express.Router();

dataController.post("/create", async (req, res) => {
  const { itemName, qty } = req.body;
  // console.log(projectname, clientname, projectStatus, userId);
  const new_data = new DataModel({
    itemName,
    qty,
  });
  await new_data.save();
  res.send({ message: "data has been created", new_data });
});

dataController.get("/getAll", async (req, res) => {
  let data = await DataModel.find();
  if (data) {
    return res.send(data);
  }
});

module.exports = dataController;
