const Joi = require('@hapi/joi');
const rescue = require('express-rescue');
const jwt = require('../auth/jwt.auth');
const signUpSignInModel = require('../Models/signUpSignInModel');
const clientsModel = require('../Models/clientsModel');

const CREATE_SCHEMA = Joi.object({
  name: Joi.string().min(3).required().max(100),
  address: Joi.string().min(3).max(150).required(),
  neighborhood: Joi.string().required().max(50).min(3),
  state: Joi.string().required().max(20).min(3),
  phone: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
});

const create = rescue(async (req, _res, next) => {
  const { error } = CREATE_UPDATE_SCHEMA.validate(req.body);
  const user = await signUpSignInModel.findUserbyEmailAndPassword(req.body);
  // console.log(user);
  if (error) throw new Error(error);
  if (!user) throw new Error('Email ou senha inválidos');
  req.data = { token: jwt.createToken(user) };
  next();
});

const getAllClients = rescue(async (req, _res, next) => {
  const clients = await clientsModel.getAllClients();
  console.log(clients);
  if (clients.length === 0) throw new Error('Não há clientes');
  req.data = clients;
  next();
});


module.exports = {
  create,
  getAllClients,
};