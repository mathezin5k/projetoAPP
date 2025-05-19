const Favorito = require('../models/favorito');

exports.adicionar = (req, res) => {
  const { id_usuario, id_bebida } = req.body;
  if (!id_usuario || !id_bebida) {
    return res.status(400).json({ erro: 'Usuário e bebida obrigatórios' });
  }

  Favorito.adicionar(id_usuario, id_bebida, err => {
    if (err) {
      console.error('Erro SQL ao adicionar favorito:', err);
      return res.status(500).json({ erro: 'Erro ao adicionar favorito' });
    }
    res.status(201).json({ mensagem: 'Favorito adicionado com sucesso' });
  });
};

exports.remover = (req, res) => {
  const { id_usuario, id_bebida } = req.body;
  if (!id_usuario || !id_bebida) {
    return res.status(400).json({ erro: 'Usuário e bebida obrigatórios' });
  }

  Favorito.remover(id_usuario, id_bebida, err => {
    if (err) {
      console.error('Erro SQL ao remover favorito:', err);
      return res.status(500).json({ erro: 'Erro ao remover favorito' });
    }
    res.status(200).json({ mensagem: 'Favorito removido com sucesso' });
  });
};

exports.listar = (req, res) => {
  const { id_usuario } = req.params;
  if (!id_usuario) {
    return res.status(400).json({ erro: 'id_usuario obrigatório' });
  }

  console.log('Listando favoritos para usuário:', id_usuario);
  Favorito.listar(id_usuario, (err, resultados) => {
    if (err) {
      console.error('Erro SQL ao listar favoritos:', err);
      return res.status(500).json({ erro: 'Erro ao listar favoritos' });
    }
    console.log('Resultados encontrados:', resultados);
    res.json(resultados);
  });
};

