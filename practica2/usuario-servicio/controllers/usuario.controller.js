const Usuario = require('../modelos/usuario');
exports.getAllUsuarios = async (req, res) => {
const usuarios = await Usuario.find();
res.json(usuarios);
};
exports.crearUsuario = async (req, res) => {
try {
const { nombre, email } = req.body;
const usuario = new Usuario({ nombre, email });
await usuario.save();
res.status(201).json(usuario);
} catch (err) {
res.status(400).json({ error: err.message });
}
};