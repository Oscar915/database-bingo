const express = require('express');
const router = express.Router();
const cartonController = require('../controllers/cartonController');

router.get('/obtener', cartonController.obtenerCartones);
router.get('/premio', cartonController.premio);
router.post('/obtener', cartonController.agregarCarton);
router.put('/vendido/:cartonId', cartonController.actualizarCartonVendido);
router.put('/novendido', cartonController.actualizarCartonesNoVendidos);

module.exports = router;
