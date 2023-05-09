const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    throw new Error("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(err);
  }
  return next();
};

module.exports = verifyToken;
