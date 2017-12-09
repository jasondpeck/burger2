//requiring orm
var orm = require("../config/orm.js");

//burger variable to be exported to the controller
var burger = {

  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  addBurger: function(cols, vals, cb) {
    orm.addBurger('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  devourBurger: function(objColVals, condition, cb) {
    orm.devourBurger('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//exporting burger
module.exports = burger;