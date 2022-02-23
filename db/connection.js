const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: process.env.DB_USER,
      // Your MySQL password
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    }
);

connection.connect((err) =>{if(err) throw err;});

module.exports = connection;