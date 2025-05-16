const Ingrediente = require('../models/ingrediente');

exports.listar = (req, res) => {
  Ingrediente.getAll((err, resultados) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar ingredientes' });
    res.json(resultados);
  });
};
