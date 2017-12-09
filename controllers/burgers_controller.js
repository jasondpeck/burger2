//dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//route to index
router.get('/', function(req, res) {
  res.redirect('/index');
});

//using index as an endpoint for handlebars to display data
router.get('/index', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

//posts burger that user added
router.post('/burgers/addBurger', function(req, res) {
  burger.addBurger(['burger_name', 'devoured'], [req.body.name, false], function() {
    res.redirect('/index');
  });
});

//updates burger status to devoured
router.put('/burgers/devourBurger/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);

  burger.devourBurger({devoured: req.body.devoured}, condition, function() {
    res.redirect('/index');
  });
});

module.exports = router;