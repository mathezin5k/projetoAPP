const express = require('express');
const router = express.Router();
const controller = require('../controllers/favoritoController');

router.post('/adicionar', controller.adicionar); // POST /favoritos/adicionar
router.delete('/remover', controller.remover);   // DELETE /favoritos/remover
router.get('/:id_usuario', controller.listar);   // GET /favoritos/:id_usuario

module.exports = router;
