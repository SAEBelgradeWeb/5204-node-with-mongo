const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const UsersController = require('./Controllers/UsersController');

app.get('/users', UsersController.Index);
app.post('/users',  UsersController.Insert);
app.get('/users/:id', UsersController.Show);
app.delete('/users/:id', UsersController.Delete);

app.listen('3000', () => console.log('API Server started and listening on port 3000'));