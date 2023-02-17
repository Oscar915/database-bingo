const connection = require('../db');

const obtenerCartones = async (req, res) => {
    const query = 'SELECT * FROM carton';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener los cartones:', error);
        res.status(500).send('Error al obtener los cartones');
      } else {
        res.json(results);
      }
    });
};


const premio = async (req, res) => {
  const query = 'SELECT SUM(c.PRECIO ) as valor FROM carton c    JOIN venta v ON v.ID_CARTON = c.ID    WHERE v.ID_JUEGO = 1 AND c.VENDIDO = 1';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los cartones:', error);
      res.status(500).send('Error al obtener los cartones');
    } else {
      res.json(results);
    }
  });
};

const agregarCarton = async (req, res) => {
    const { C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23, C24, VENDIDO , PRECIO}  = req.body;
  const query = 'INSERT INTO carton (C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23, C24, VENDIDO, PRECIO ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23, C24, VENDIDO, PRECIO];
  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al agregar el cartón:', error);
      res.status(500).send('Error al agregar el cartón');
    } else {
      res.send('Cartón agregado exitosamente');
    }
  });
};

const actualizarCartonVendido = async (req, res) => {
  try {
    const { cartonId } = req.params;
    const query = `
      UPDATE carton
      SET vendido = true
      WHERE id = $1
    `;
    const values = [cartonId];
    await pool.query(query, values);
    res.json({ message: 'Cartón actualizado a vendido' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error actualizando el cartón');
  }
};

const actualizarCartonesNoVendidos = async (req, res) => {
  try {
    const query = `
      UPDATE carton
      SET vendido = false
    `;
    await pool.query(query);
    res.json({ message: 'Cartones actualizados a no vendidos' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error actualizando los cartones');
  }
};

module.exports = {
  obtenerCartones,
  premio,
  actualizarCartonVendido,
  actualizarCartonesNoVendidos,
  agregarCarton
};
