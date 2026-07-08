const express = require('express');
const {criarUsuario, login, getMe, listarUsuarios, deletarUsuario} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', authMiddleware, criarUsuario );
router.post('/login', login);
router.get('/me', authMiddleware, getMe);
router.get('/usuarios', authMiddleware, listarUsuarios);
router.delete('/:id/deletar', authMiddleware, deletarUsuario);

module.exports = router;