const Bebida = require('../models/bebida');

exports.listar = (req, res) => {
  const ingrediente = req.query.ingrediente || null;

  Bebida.getAll(ingrediente, (err, resultados) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar bebidas' });
    res.json(resultados);
  });
};

exports.buscarPorId = (req, res) => {
  const { id } = req.params;

  Bebida.getById(id, (err, resultados) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar bebida' });

    if (resultados.length === 0) {
      return res.status(404).json({ mensagem: 'Bebida não encontrada' });
    }

    res.json(resultados[0]);
  });
};
