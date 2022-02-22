const express = require('express');

//Import routers
const { postsRouter } = require('./routes/posts.routes')

const users = [
    { name: 'Jorge', age: 27 },
    { name: 'Luis', age: 29 },
    { name: 'Pamela', age: 25 },
];

const app = express(); // Inicializar aplicación express

app.use(express.json()); // Habilitar el JSON

// GET para users
app.get('/users', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
});

app.use('/api/v1/posts', postsRouter);


app.listen(4000, () => {
    console.log('Express app running');
});