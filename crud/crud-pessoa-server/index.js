const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pessoa = require('./pessoa');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('CRUD Pessoa')
})

app.get(`/${pessoa.colecao}`, (req, res) => {
    res.send(pessoa.lista());
});

app.get(`/${pessoa.colecao}/:id`, (req, res) => {
    res.send(pessoa.porId(req.params.id));
});


app.post(`/${pessoa.colecao}`, (req, res) => {
    res.send(pessoa.adiciona({ id: null, nome: req.body.nome }));
});

app.put(`/${pessoa.colecao}/:id`, (req, res) => {
    res.send(pessoa.altera({ id: req.params.id, nome: req.body.nome }));
});

app.put(`/${pessoa.colecao}`, (req, res) => {
    res.send(pessoa.altera({ id: req.body.id, nome: req.body.nome }));
});


app.delete(`/${pessoa.colecao}/:id`, (req, res) => {
    res.send(pessoa.remove(req.params.id));
});


app.listen(3000)
