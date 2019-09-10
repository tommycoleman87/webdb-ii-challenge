const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/cars', (req, res) => {
    db.select('*').from('cars').then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.post('/cars', (req, res) => {
    const car = req.body;
    db('cars').insert(car)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.put('/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = req.body;
    db('cars').where({id: id}).update(car)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.delete('/cars/:id', (req, res) => {
    const id = req.params.id;
    db('cars').where({id: id}).del()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(result)
    })
})
module.exports = server;