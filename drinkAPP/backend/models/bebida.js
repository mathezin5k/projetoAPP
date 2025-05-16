const db = require('../config/db');

const Bebida = {
  getAll: (ingrediente, callback) => {
    if (!ingrediente) {
      const query = 'SELECT * FROM bebidas';
      return db.query(query, callback);
    }

    const query = 'SELECT * FROM bebidas WHERE descricao LIKE ?';
    db.query(query, [`%${ingrediente}%`], callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM bebidas WHERE id_bebida = ?';
    db.query(query, [id], callback);
  }
};


module.exports = Bebida;
