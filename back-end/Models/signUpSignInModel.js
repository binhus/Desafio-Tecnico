const connection = require('./connection');

const findUserbyEmailAndPassword = ({ email, password }) => connection
  .query(
    'SELECT id, name, email, cep FROM users WHERE email = ? AND password = ?',
    [email, password],
  )
  .then((array) => array[0][0]);

module.exports = {
  findUserbyEmailAndPassword,
}