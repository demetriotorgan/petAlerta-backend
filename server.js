const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const petRoutes = require('./routes/petRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req,res)=>{
    res.json({mensagem:'PetAlert API rodando'});    
});

app.use('/api', petRoutes);

if(process.env.NODE_ENV !== 'production'){
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;