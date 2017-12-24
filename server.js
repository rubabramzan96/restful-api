var express = require('express'),
 app = express();
port = process.env.PORT || 3000;

//install bodyParser and use
var bodyParser = require('body-parser');

//connect Db bu adding a url to the mongoose instance cinnection
 var mongoose = require('mongoose');




app.get('/', function(req,res){
    res.send("hello from sligo server")
})
//provoding a Connect/Express middleware
const cors = require('cors')
app.use(cors());

//router
var router = require('./API/routes/routes');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//import the routes
app.use('/api/test', router);


app.listen(port);

console.log('This RESTful API server started on: ' + port);