var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'vimstory'
});

module.exports = pool;


