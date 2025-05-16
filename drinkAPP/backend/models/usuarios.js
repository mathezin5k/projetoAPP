const db = require('../config/db');

const Usuario ={
    criar: (email, senha, callback) =>{
      const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
      db.query(query, [email, senha], callback);
    },

    buscarPorEmail: (email, callback) =>{
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(query, [email], callback);
    }
};

module.exports = Usuario;
