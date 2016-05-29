var express = require('express');
var router = express.Router();

var data = {'one': 1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,
    'eight':8,'nine':9,'ten':10,'eleven':11};


router.get('/', function(req, res) {
    res.status(200).json(data);
});

router.get('/:id', function(req, res) {
    // console.log(data);
    var idx = data[req.params.id];
    res.status(200).json(idx);
});

router.put('/:id', function(req, res) {
    var newArr = data;
    newArr[req.params.id] = req.body;
    res.status(200).json(newArr);
});

router.delete('/:id', function(req, res) {
    var newArr = data;
    var result = delete newArr[req.params.id];
    res.status(200).json(result);
});

router.post('/', function(req, res) {
    var newArr = data;
    newArr[req.body.id] = req.body.value;
    res.status(201).json(newArr);
});

module.exports = router
