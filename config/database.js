var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'vimstory'
});
<<<<<<< HEAD
function executeQuery(cmd,paramters){ 
    var emitter = this; 
=======

function executeQuery(cmd,paramters){
    var emitter = this;
>>>>>>> master
    con.query(cmd,paramters,function(err,results){
      console.log(cmd);
      if (err){
        emitter.emit('error',error);
        throw err;
      }
      emitter.emit('results',results);
    });
<<<<<<< HEAD
=======
    
>>>>>>> master
}
executeQuery.prototype = new EventEmitter();
module.exports = executeQuery;
