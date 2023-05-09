const messageModel = require("../models/messagemodel");

exports.messageController = async (req, res) => {
  try {
    const { message, name, email } = req.body;

    if (!name || !email || !message) {
      throw new Error("All fields required");
    } else {
      const data = await messageModel({ message, name, email });
      await data.save();
      res.status(200).json({ message: "Saved successfully" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.registerUser = async (req, res) => {
  try {
    const data = await messageModel.find({});

    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await messageModel.findByIdAndDelete(id);
    res.status(200).send("Successfully deleted");
  } catch (error) {
    res.status(400).json(error);
  }
};
