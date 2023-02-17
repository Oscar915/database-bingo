const express = require('express');
const app = express();
const cors = require('cors');
const cartonRoutes = require('./routes/cartonRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
//const juegoRoutes = require('./routes/juegoRoutes');
//const ventaRoutes = require('./routes/ventaRoutes');

app.use(express.json());
app.use(cors());
app.use('/carton', cartonRoutes);
app.use('/clientes', clienteRoutes);
//app.use('/juegos', juegoRoutes);
//app.use('/ventas', ventaRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
