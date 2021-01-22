const connection = require('./connection');

const createClient = (name, address, neighborhood, state, phone, email, cep) => connection.query('INSERT INTO clients (name, address, neighborhood, state, phone, email, cep) VALUES (?,?,?,?,?,?,?)  ', [name, address, neighborhood, state, phone, email, cep]);

const updateClient = (name, address, neighborhood, state, phone, email, cep, id) => connection.query('UPDATE clients SET name = ?, address = ?, neighborhood = ?, state = ?, phone = ?, email = ?, cep = ? WHERE id = ?', [name, address, neighborhood, state, phone, email, cep, id]);

const getAllClients = () => connection.query('SELECT * FROM clients').then((clients) => clients[0]);

const deleteClient = (id) => connection.query('DELETE FROM clients WHERE id = ?', [id]);

const clientById = (id) => connection.query('SELECT * FROM clients WHERE id = ?', [id]).then((orders) => orders[0]);


module.exports = {
  createClient,
  updateClient,
  getAllClients,
  deleteClient,
  clientById,
};
