const express = require('express');
const router = express.Router();

const PedidoController = require('../controllers/PedidoController')

/* listar produtos */
router.get('/', PedidoController.index);
router.get('/:id/produtos', PedidoController.showProducts);

module.exports = router;
