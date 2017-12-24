'use strict'
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send("hello from router")
})
/*
//include controller
var controller = require('../controllers/controller');

// get something
router.get('/something/:id?', function(req, res, next) { controller.doSomething(req, res, next); }); //just example

//create/add
router.post('/something/:id?', function(req, res, next) { controller.doSomething(req, res, next); }); //just example

//edit & update
router.put('/something/:id?', function(req, res, next) { controller.doSomething(req, res, next); }); //just example

*/
module.exports = router;

