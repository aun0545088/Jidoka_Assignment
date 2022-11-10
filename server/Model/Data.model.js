const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  itemName: { type: String, required: true },
  qty: { type: Number, required: true },
});

const DataModel = mongoose.model("data", dataSchema);

module.exports = DataModel;
