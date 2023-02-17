const connection = require('../db');

const obtenerClientes = async (req, res) => {
    const query = 'SELECT * FROM CLIENTE';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener los CLIENTE:', error);
        res.status(500).send('Error al obtener los CLIENTE');
      } else {
        res.json(results);
      }
    });
};


const agregarCliente = async (req, res) => {
    const { nombre, apellido, direccion, ciudad, pais, telefono, email, fecha_registro, id_actividad } = req.body;

    const query = 'INSERT INTO CLIENTE (NOMBRE, APELLIDO, DIRECCION, CIUDAD, PAIS, TELEFONO, EMAIL, FECHA_REGISTRO, ID_ACTIVIDAD) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
    connection.query(query, [nombre, apellido, direccion, ciudad, pais, telefono, email, fecha_registro, id_actividad], (err, results) => {
      if (err) throw err;
      res.status(201).json({
        id: results.insertId,
        nombre,
        apellido,
        direccion,
        ciudad,
        pais,
        telefono,
        email,
        fecha_registro,
        id_actividad
      });
    });
  
};



module.exports = {
  obtenerClientes,

};
