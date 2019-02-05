const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: 'root',
  password: 'admin',
  database: 'db_vue_select'
});
connection.connect();
module.exports = connection;
