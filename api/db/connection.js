const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'admin',
  database: process.env.DB_DATABASE || 'db_vue_select'
});
connection.connect();
module.exports = connection;