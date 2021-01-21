const connection = require('./connection');

const createClient = (data) => connection.query('INSERT INTO clients (name, address, neighborhood, state, phone, email, cep) VALUES (?)  ', [data]);

const updateClient = (name, address, neighborhood, state, phone, email, cep, id) => connection.query('UPDATE clients SET name = ? SET address = ? SET neighborhood = ? SET state = ? SET phone = ? SET email = ? SET cep = ? WHERE id = ?', [name, address, neighborhood, state, phone, email, cep, id]);

const getAllClients = () => connection.query('SELECT * FROM clients').then((clients) => clients[0]);

const deleteClient = (id) => connection.query('DELETE FROM clients WHERE id = ?', [id]);


module.exports = {
  createClient,
  updateClient,
  getAllClients,
  deleteClient,
};
