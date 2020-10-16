import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/src/database/uploads', express.static(path.join(__dirname, './database/uploads')));
app.use(errorHandler);


/**
Rota = conjunto
Recurso = usuário
Métodos = GET, POST, PUT, DELETE

    GET = Buscar uma informação
    POST = Criar nova informação
    PUT = Editar uma informação
    DELETE = Deletar uma informação

Parâmetros
    Query: Parametros direto na url, usam nome, ex: http://localhost:3333/users?search=lucas
    Route Params: Parametros direto na url, não usa nome, ex: http://localhost:3333/users/1
    Body: Parametros que não cabem na url, json por exemplo.

*/

// Query Params
// app.get('/users', (request, response) => {
//     console.log(request.query);
//     return response.json({'message': 'Hello World'})
// })

// Route Params
// app.get('/users/:id', (request, response) => {
//     console.log(request.params);
//     return response.json({'message': 'Hello World'})
// })

// Body Params
// app.get('/users', (request, response) => {
//     console.log(request.body);
//     return response.json({'message': 'Hello World'})
// })

app.listen(3333);