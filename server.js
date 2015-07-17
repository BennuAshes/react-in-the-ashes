var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.query());

app.use(express.static(path.join(__dirname, './www')));
app.listen(9417);