const rescue = require('express-rescue');
const { checkToken } =require('../auth/jwt.auth');

const auth = rescue((req, res, next) => {
  const token = req.headers.authorization;
  try {
    checkToken(token);
  } catch (error) {
    throw new Error("jwt-malformed");
  }

  next();
})

module.exports = auth