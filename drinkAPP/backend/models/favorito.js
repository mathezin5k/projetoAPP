const db = require('../config/db');

const Favorito = {
  adicionar: (id_usuario, id_bebida, callback) => {
    const query = 'INSERT INTO favoritos (id_usuario, id_bebida) VALUES (?, ?)';
    db.query(query, [id_usuario, id_bebida], callback);
  },

  remover: (id_usuario, id_bebida, callback) => {
    const query = 'DELETE FROM favoritos WHERE id_usuario = ? AND id_bebida = ?';
    db.query(query, [id_usuario, id_bebida], callback);
  },

  listar: (id_usuario, callback) => {
    const query = 'SELECT * FROM favoritos WHERE id_usuario = ?';
    db.query(query, [id_usuario], callback);
  }
};

module.exports = Favorito;
