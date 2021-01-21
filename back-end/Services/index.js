const Joi = require('@hapi/joi');
const rescue = require('express-rescue');
const jwt = require('../auth/jwt.auth');
const signUpSignInModel = require('../Models/signUpSignInModel');

const LOGIN_SCHEMA = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),
});

const login = rescue(async (req, _res, next) => {
  console.log(req.body);
  const { error } = LOGIN_SCHEMA.validate(req.body);
  const user = await signUpSignInModel.findUserbyEmailAndPassword(req.body);
  // console.log(user);
  if (error) throw new Error(error);
  if (!user) throw new Error('Email ou senha inválidos');
  req.data = { token: jwt.createToken(user) };
  next();
});

const auth = rescue( async (req, res, next) => {

  console.log(req.headers.authorization);
  next();
})

module.exports = {
  login,
  auth,
};