const mysql2 = require('mysql2/promise');
require('dotenv').config();

const config = {
  database: process.env.MYSQL_DB || 'Zukk',
  port: process.env.PORT || 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
};

const connection = mysql2.createPool(config);

module.exports = connection;
