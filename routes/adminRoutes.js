const express = require('express');
const authorize = require('../middlewares/authorize');
const authMiddleware = require('../middlewares/authMiddleware');
const { rotaPrivadaTeste } = require('../controllers/authController');
const router = express.Router();

router.get('/admin/perfil', authMiddleware, authorize('ADMIN', 'MODERADOR'), rotaPrivadaTeste);

module.exports = router;