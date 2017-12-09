//connection to mysql
var mysql = require('mysql');
var connection;

//jawsdb for heroku / local option
if (process.env.JAWSDB_URL) {
  console.log("Success")
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
};
connection.connect(function(err) {
  if (err) {
    console.error('error conencting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

//export for orm
module.exports = connection;