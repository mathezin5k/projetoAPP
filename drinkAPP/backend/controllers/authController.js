const Usuario = require('../models/usuarios');
const bcrypt = require('bcrypt');

exports.cadastrar = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ erro: 'Email e senha obrigatórios', tentarNovamente: true });
    }

    Usuario.buscarPorEmail(email, async (err, resultado) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).json({ erro: 'Erro interno', tentarNovamente: true });
        }

        if (resultado.length > 0) {
            return res.status(409).json({ erro: 'Email já cadastrado', tentarNovamente: true });
        }

        try {
            const senhaCriptografada = await bcrypt.hash(senha, 10);

            Usuario.criar(email, senhaCriptografada, (err, result) => {
                if (err) {
                    console.error('Erro ao criar usuário:', err);
                    return res.status(500).json({ erro: 'Erro ao cadastrar usuário', tentarNovamente: true });
                }

                res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
            });
        } catch (e) {
            console.error('Erro na criptografia da senha:', e);
            return res.status(500).json({ erro: 'Erro interno ao criptografar senha', tentarNovamente: true });
        }
    });
};

exports.login = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ erro: 'Email e senha obrigatórios', tentarNovamente: true });
    }

    Usuario.buscarPorEmail(email, async (err, resultado) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).json({ erro: 'Erro interno', tentarNovamente: true });
        }

        if (resultado.length === 0) {
            return res.status(401).json({ erro: 'Usuário não encontrado', tentarNovamente: true });
        }

        const usuario = resultado[0];
        const senhaConfere = await bcrypt.compare(senha, usuario.senha);

        if (!senhaConfere) {
            return res.status(401).json({ erro: 'Senha incorreta', tentarNovamente: true });
        }

        res.json({ mensagem: 'Login bem-sucedido', id_usuario: usuario.id_usuario });
    });
};
