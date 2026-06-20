const express = require('express');
const router = express.Router();

const upload = require('../middlewares/uploadMiddleware');
const { criarFoto, listarFotos } = require('../controllers/fotoController');

router.post('/postar', upload.single('foto'), criarFoto);
router.get('/listar', listarFotos);

module.exports = router;