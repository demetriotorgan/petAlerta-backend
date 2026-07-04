const express = require('express');
const {criarUsuario, login} = require('../controllers/authController');

const router = express.Router();

router.post('/auth/register', criarUsuario );
router.post('/auth/login', login);

module.exports = router;