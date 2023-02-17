const express = require('express');
const router = express.Router();
const cartonController = require('../controllers/clienteController');


router.get('/obtener', cartonController.obtenerClientes);
//router.post('/obtener', cartonController.agregarCarton);
//router.put('/vendido/:cartonId', cartonController.actualizarCartonVendido);
//router.put('/novendido', cartonController.actualizarCartonesNoVendidos);

module.exports = router;