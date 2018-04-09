var pool = require('../config/database');

function getUsers() {
    pool.getConnection(function (err, connection) {
        // Use the connection
        var query = 'SELECT * FROM user';
        connection.query(query , function (error, results, fields) {
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                throw error;
            }
            // Don't use the connection here, it has been returned to the pool
            return results;
        });
    });
}

function addUser(paramters) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        paramters = pool.standardized(paramters,8);
        var query = 'INSERT INTO user values(null,?,?,?,?,?,?,?,?);';
        connection.query(query,paramters, function (error, results, fields) {
            // And done with the connection.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
            console.log(results);
        });
    });
}

addUser(['linh','123']);
module.exports = {
    getUsers,
    addUser
}