const express = require('express');
const router = express.Router();
const controller = require('../controllers/ingredienteController');

router.get('/', controller.listar); // GET /ingredientes

module.exports = router;
