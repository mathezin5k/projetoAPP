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
    const query = `
      SELECT b.*, e.id_etapa, e.descricao AS etapa_descricao, e.ordem
      FROM bebidas b
      LEFT JOIN etapas_preparo e ON b.id_bebida = e.id_bebida
      WHERE b.id_bebida = ? 
      ORDER BY e.ordem`;

    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, []);

      // Montar o objeto da bebida com etapas agrupadas
      const bebida = {
        id_bebida: results[0].id_bebida,
        nome: results[0].nome,
        descricao: results[0].descricao,
        
        // Adicione outros campos da tabela bebidas conforme necessário
        etapas: results
          .filter(r => r.id_etapa !== null)
          .map(r => ({
            id_etapa: r.id_etapa,
            descricao: r.etapa_descricao,
            ordem: r.ordem
          }))
      };

      callback(null, bebida);
    });
  }
};

module.exports = Bebida;
