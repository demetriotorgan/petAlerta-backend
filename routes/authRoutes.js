const express = require('express');
const {criarUsuario, login} = require('../controllers/authController');

const router = express.Router();

router.post('/register', criarUsuario );
router.post('/login', login);

module.exports = router;