const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Cargar usuarios desde archivo
let usuarios = [];
try {
    usuarios = JSON.parse(fs.readFileSync('usuarios.json', 'utf8'));
} catch (err) {
    // Si el archivo no existe, inicializar con datos por defecto
    usuarios = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', edad: 30 },
        { id: 2, nombre: 'María García', email: 'maria@example.com', edad: 25 },
        { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', edad: 35 }
    ];
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));
}

// Endpoint para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Endpoint para agregar un nuevo usuario
app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    nuevoUsuario.id = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    usuarios.push(nuevoUsuario);
    fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));
    res.status(201).json(nuevoUsuario);
});

app.listen(3001, () => {
    console.log('El servicio usuario se está ejecutando sobre el puerto 3001');
});