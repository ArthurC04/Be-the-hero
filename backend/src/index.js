const express = require("express");
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);


/*
Métodos HTTP
GET  -> Buscar Informação No Backend
POST -> Cria Informações  No Backend
PUT -> Alterar Informação No Backend
DELETE -> Deletar Informação No Backend
*/

/* Tipos de Parametros 
Query Params: ? (Filtros, paginação)
Route Params: Utilizados para identificar recursos
Request Body: Corpo de requesição, utilizado para criar ou alterar recursos
*/

/* 
SQL: MYSQL SQLITE, POSTGRESQL
NOSQL: MongoDB, CouchDB
 */

 /* 
 Driver: SELECT * FROM users
 Query Builder
  */

app.listen(3333, () =>{
    console.log("Server Online Na porta 3333")
})