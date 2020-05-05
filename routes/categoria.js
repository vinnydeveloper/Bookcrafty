const express = require('express');
const router = express.Router();

const CategoriaController = require('../controllers/CategoriaController')

/* listar Categorias */
router.get('/', CategoriaController.index);
router.get('/:id/produtos', CategoriaController.showProducts);


module.exports = router;
