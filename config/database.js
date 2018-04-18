var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vimstory'
});
con.connect();
function executeQuery(cmd,paramters){
    con.connect();
    var emitter = this;
    con.query(cmd,paramters,function(err,results){
      if (err){
        emitter.emit('error',error);
        throw err;
      }
      emitter.emit('results',results);
    });
    con.end();
}
executeQuery.prototype = new EventEmitter();
module.exports = executeQuery;
