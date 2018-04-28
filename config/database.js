var mysql = require('mysql');
var EventEmitter = require('events').EventEmitter;
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'vimstory'
});
function executeQuery(cmd,paramters){ 
    if (this.getMaxListeners() < 12)
      this.setMaxListeners(12);
    var emitter = this; 
    con.query(cmd,paramters,function(err,results){
      console.log(cmd);
      if (err){
        emitter.emit('error',err);
        console.log(err);
      }
      emitter.emit('results',results);
    });
}
executeQuery.prototype = new EventEmitter();

module.exports = executeQuery;
