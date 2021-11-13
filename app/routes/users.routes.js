const express = require('express');
const route = express.Router();
const controller = require('../complements/data');

route.get('/', (req, res) =>{
    res.json({"data":"Hola desde Rutas"});
});

route.get('/user', controller.getdata);

module.exports = route;