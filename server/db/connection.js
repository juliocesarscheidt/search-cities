const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: process.env.MYSQL_HOST || '127.0.0.1',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || 'admin',
  database: process.env.MYSQL_DATABASE || 'vue_project'
});
