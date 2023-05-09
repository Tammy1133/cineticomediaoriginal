const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: { type: String },
  name: { type: String },
  email: { type: String },
});

const messageModel = mongoose.model("messages", messageSchema);
module.exports = messageModel;
