require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usuarioRutas = require('./rutas/usuarioRutas');
const app = express();
app.use(express.json());
app.use('/usuarios', usuarioRutas);
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('Conectado a MongoDB');
app.listen(PORT, () => console.log(`Servicio Usuario ejecutándose en puerto ${PORT}`));
}).catch(err => console.error(err));