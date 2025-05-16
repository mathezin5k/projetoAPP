const db = require('../config/db');

const Ingrediente = {
  getAll: (callback) => {
    const query = 'SELECT * FROM ingredientes ORDER BY nome';
    db.query(query, callback);
  }
};

module.exports = Ingrediente;
