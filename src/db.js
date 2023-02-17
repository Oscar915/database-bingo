const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'nancybell',
  password: 'nancybell',
  database: 'belldata',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

module.exports = connection;