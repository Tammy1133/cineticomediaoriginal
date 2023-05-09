const {
  messageController,
  registerUser,
  deleteMessage,
} = require("../controllers/messagecontroller");

const router = require("express").Router();

router.post("/message", messageController);
router.get("/messages", registerUser);
router.delete("/deletemessage/:id", deleteMessage);

module.exports = router;
