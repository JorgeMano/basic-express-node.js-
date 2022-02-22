const express = require('express');

//Import routers
const { postsRouter } = require('./routes/posts.routes');
const { usersRouter } = require('./routes/users.routes');

const app = express(); // Inicializar aplicación express

app.use(express.json()); // Habilitar el JSON

app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/users', usersRouter);


app.listen(4000, () => {
    console.log('Express app running');
});