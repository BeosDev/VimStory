var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vimstory'
});

pool.standardized = function (paramters,len) {
  if (paramters.length !== len) {
    for (var i = paramters.length; i < len; i++) {
      paramters[i] = null;
    }
  }
  return paramters;
}

module.exports = pool;