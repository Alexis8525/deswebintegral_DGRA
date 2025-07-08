const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Cargar productos desde archivo
let productos = [];
try {
    productos = JSON.parse(fs.readFileSync('productos.json', 'utf8'));
} catch (err) {
    // Si el archivo no existe, inicializar con datos por defecto
    productos = [
        { id: 1, nombre: 'Laptop', precio: 1200, categoria: 'Electrónicos' },
        { id: 2, nombre: 'Teléfono', precio: 800, categoria: 'Electrónicos' },
        { id: 3, nombre: 'Tablet', precio: 500, categoria: 'Electrónicos' }
    ];
    fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
}

// Endpoint para obtener todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// Endpoint para agregar un nuevo producto
app.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    nuevoProducto.id = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    productos.push(nuevoProducto);
    fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
    res.status(201).json(nuevoProducto);
});

app.listen(3002, () => {
    console.log('El servicio producto se está ejecutando sobre el puerto 3002');
});
