const { Router } = require('express');
const clientsServices = require('../Services/clients');

const clientsController = Router();

clientsController.post('/', (req, res) => { // criar cliente
  res.status(200).json(req.data);
});

clientsController.get('/', clientsServices.getAllClients, (req, res) => { // obter clientes
  res.status(200).json(req.data)
});

clientsController.get('/:id', clientsServices.getClientById ,(req, res) => { // obter cliente por id
  res.status(200).json(req.data)
});

clientsController.put('/:id', clientsServices.update ,(req, res) => { // atualizar cliente
  res.status(200).json(req.data)
});

clientsController.delete('/', (req, res) => { // deletar cliente
  res.status(200).json(req.data)
})

module.exports = clientsController;
