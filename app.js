var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var items = require('./routes/items')
app.use('/api/items', items);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started on 8080');

module.exports = app
