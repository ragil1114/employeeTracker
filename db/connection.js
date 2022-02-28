const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '@Rag$-2-Riche$_._14176157!',
      database: 'CMS_db'
    }
);

connection.connect((err) =>{if(err) throw err;});

module.exports = connection;