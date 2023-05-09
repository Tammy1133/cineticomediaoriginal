const router = require("express").Router();

const { register, login } = require("../controllers/usercontroller");

router.post("/register", register);

router.post("/login", login);

module.exports = router;
