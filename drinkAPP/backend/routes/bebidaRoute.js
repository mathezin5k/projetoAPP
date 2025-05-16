const express = require('express');
const router = express.Router();
const controller = require('../controllers/bebidaController');

router.get('/', controller.listar);         // GET /bebidas ou /bebidas?ingrediente=limão
router.get('/:id', controller.buscarPorId); // GET /bebidas/1

module.exports = router;
