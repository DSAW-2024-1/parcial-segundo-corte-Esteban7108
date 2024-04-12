const express = require('express');
const axios = require('axios');

const bodyParser = require('body-parser');
const app = express();
const PORT = 8081;
app.use(bodyParser.json());

const textoRegex = /^[a-zA-Z]+$/;
const esTextoValido = (texto) => /^[a-zA-Z]+$/.test(texto);

const usuarios = [
    { nombre: 'SAMUEL', apellido: 'ACERO' },
    { nombre: 'DAREK', apellido: 'ALJURI' },
    { nombre: 'ANDRÉS', apellido: 'AZCONA' },
    { nombre: 'JUAN', apellido: 'CEPEDA' },
    { nombre: 'ANA', apellido: 'CHAVES' },
    { nombre: 'CARLOS', apellido: 'CRUZ' },
    { nombre: 'DIEGO', apellido: 'DÍAZ' },
    { nombre: 'JORGE', apellido: 'DÍAZ' },
    { nombre: 'ESTEBAN', apellido: 'DÍAZ' },
    { nombre: 'JUAN', apellido: 'FORERO' },
    { nombre: 'SANTIAGO', apellido: 'GUTIERREZ' },
    { nombre: 'SAMUEL', apellido: 'LÓPEZ' },
    { nombre: 'MICHAEL', apellido: 'MEDINA' },
    { nombre: 'KATHERIN', apellido: 'MORENO' },
    { nombre: 'JUAN', apellido: 'MORENO' },
    { nombre: 'NICOLÁS', apellido: 'MUÑOZ' },
    { nombre: 'SANTIAGO', apellido: 'NAVARRO' },
    { nombre: 'JUAN', apellido: 'PARRADO' },
    { nombre: 'DANIEL', apellido: 'RAMIREZ' },
    { nombre: 'JUAN', apellido: 'RESTREPO' },
    { nombre: 'GABRIELA', apellido: 'REYES' },
    { nombre: 'JUAN', apellido: 'RODRÍGUEZ' },
    { nombre: 'VALENTINA', apellido: 'RUIZ' },
    { nombre: 'MARIANA', apellido: 'SALAS' },
    { nombre: 'SEBASTIÁN', apellido: 'SÁNCHEZ' },
    { nombre: 'JOSUE', apellido: 'SARMIENTO' },
    { nombre: 'SANTIAGO', apellido: 'SOLER' },
    { nombre: 'MARÍA', apellido: 'TAMAYO' },
    { nombre: 'NICOLÁS', apellido: 'URREA' },

    

]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Bienvenido al parcial de Esteban Díaz Vargas');
});


app.get('/assets', async (req, res) => {
    try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Hubo un error al obtener los datos' });
    }
});
app.get('/coin/:coinName', async (req, res) => {
    const coinName = req.params.coinName;

    try {
        const response = await axios.get(`https://api.coincap.io/v2/assets/${coinName}`);
        const data = response.data.data;

        if (!data) {
            res.send('El nombre de la moneda no fue encontrado en la base de datos' );
        }

        const precioEnDolares = data.priceUsd;
        const mensaje = `El precio en dólares de la moneda ${coinName} para el día de hoy es ${precioEnDolares}`;

        return res.send(mensaje);
    } catch (error) {
        res.send('El nombre de la moneda no fue encontrado en la base de datos' );
    }
});



app.get('/users/:count', (req, res) => {
    const countParam = req.params.count;

    if (!/^\d+$/.test(countParam)) {
        return res.status(400).json({ error: 'El parámetro count debe ser un número entero.' });
    }

    const count = parseInt(countParam);

    const sort = req.query.sort || 'ASC';

    if (sort !== 'ASC' && sort !== 'DESC') {
        res.send('El parámetro para organizar debe ser "ASC" o "DESC".');
    }

    let usuariosOrdenados;

    if (sort === 'ASC') {
        usuariosOrdenados = usuarios.sort((a, b) => a.apellido.localeCompare(b.apellido));
    } else {
        usuariosOrdenados = usuarios.sort((a, b) => b.apellido.localeCompare(a.apellido));
    }

    usuariosOrdenados = usuariosOrdenados.slice(0, count);

    const listaUsuarios = usuariosOrdenados.map(usuario => `<li class="usuario">${usuario.nombre} ${usuario.apellido}</li>`).join('');

    const respuesta = `
        <html>
        <head>
            
        </head>
        <body>
            <h2>Lista de usuarios:</h2>
            <ul>${listaUsuarios}</ul>
        </body>
        </html>
    `;

    res.send(respuesta);
});



app.get('/users', (req, res) => {
    res.send('Aquí puedes "crear" tu usuario');
});
app.post('/users', (req, res) => {
    const { name, lastName, email, city, country } = req.body;

    if (!name || !textoRegex.test(name) || 
        !lastName || !textoRegex.test(lastName) || 
        !email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Los campos de nombre y apellido son obligatorios y deben contener solo letras, y el campo de correo debe ser una cadena de texto.' });
    }

    if ((city && !textoRegex.test(city)) || (country && !textoRegex.test(country))) {
        return res.status(400).json({ error: 'Los campos de ciudad y país, si están presentes, deben contener solo letras.' });
    }

    const ciudadDefecto = city || 'Bogotá';
    const paísDefecto = country || 'Colombia';

    const usuarioCreado = {
        name,
        lastName,
        email,
        city: ciudadDefecto,
        country: paísDefecto
    };

    res.json(usuarioCreado);
});







app.listen(PORT, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});
