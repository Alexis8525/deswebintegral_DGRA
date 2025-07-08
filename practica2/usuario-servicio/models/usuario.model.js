const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({
nombre: String,
email: { type: String, unique: true }
});
module.exports = mongoose.model('Usuario', usuarioSchema);