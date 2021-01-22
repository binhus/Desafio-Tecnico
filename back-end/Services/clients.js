const Joi = require('@hapi/joi');
const rescue = require('express-rescue');
const jwt = require('../auth/jwt.auth');
const signUpSignInModel = require('../Models/signUpSignInModel');
const clientsModel = require('../Models/clientsModel');

const CREATE_UPDATE_SCHEMA = Joi.object({
  name: Joi.string().min(3).required().max(100),
  address: Joi.string().min(3).max(150).required(),
  neighborhood: Joi.string().required().max(50).min(3),
  state: Joi.string().required().max(20).min(2),
  phone: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  cep: Joi.string().required(),
});

const create = rescue(async (req, _res, next) => {
  const { error } = CREATE_UPDATE_SCHEMA.validate(req.body);
  const { name, address, neighborhood, state, phone, email, cep } = req.body
  const user = await clientsModel.createClient(name, address, neighborhood, state, phone, email, cep);
  if (error) throw new Error(error);
  if (user[0].affectedRows !== 1) throw new Error('Algo deu errado ao criar o usuário');
  req.data = { message: 'Usuário criado com sucesso!' };
  next();
});

const getAllClients = rescue(async (req, _res, next) => {
  const clients = await clientsModel.getAllClients();
  if (clients.length === 0) throw new Error('Não há clientes');
  req.data = clients;
  next();
});

const getClientById = rescue(async (req, _res, next) => {
  const { id } = req.params
  const client = await clientsModel.clientById(id);
  if (client.length === 0) throw new Error('Não há cliente');
  req.data = client;
  next();
});

const update = rescue(async (req, _res, next) => {
  const { error } = CREATE_UPDATE_SCHEMA.validate(req.body);
  const { id } = req.params;
  const { name, address, neighborhood, state, phone, email, cep } = req.body
  const update = await clientsModel.updateClient(name, address, neighborhood, state, phone, email, cep, id);
  if (error) throw new Error(error);
  if (update[0].affectedRows !== 1) {
    throw new Error('deu ruim na hora de atualizar o status');
  }
  req.data = { message: 'Status atualizado com sucesso!' };
  next();
});

const exclude = rescue(async (req, _res, next) => {
  const { id } = req.params;
  const exclude = await clientsModel.deleteClient(id);
  if (exclude[0].affectedRows !== 1) {
    throw new Error('deu ruim na hora de atualizar o status');
  }
  req.data = { message: 'Cliente excluído com sucesso!' };
  next();
});


module.exports = {
  exclude,
  create,
  getAllClients,
  getClientById,
  update,
};