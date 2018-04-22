var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD
  password: 'root',
  database: 'vimstory2'
=======
  password: '',
  database: 'vimstory'
>>>>>>> master
});
function executeQuery(cmd,paramters){ 
    var emitter = this; 
    con.query(cmd,paramters,function(err,results){
      console.log(cmd);
      if (err){
        emitter.emit('error',err);
        throw err;
      }
      emitter.emit('results',results);
    });
}
executeQuery.prototype = new EventEmitter();
module.exports = executeQuery;
