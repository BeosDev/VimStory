var pool = require("../config/database");

function getCategories() {

    pool.getConnection(function (err, connection) {
        // Use the connection
        var query = 'SELECT * FROM category';
        connection.query(query, function (error, results, fields) {
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

function getCategory(parameters) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        parameters = pool.standardized(parameters, 1);
        var query = 'SELECT * FROM category where C_ID = ?';
        connection.query(query, parameters, function (error, results, fields) {
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

//getCategory(["1"]);

function addCategory(parameters) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        parameters = pool.standardized(parameters, 2);
        var query = 'INSERT INTO category VALUES(null,?)';
        connection.query(query, parameters, function (error, results, fields) {
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

//addCategory(["aaa"]);

function updateCategory(parameters) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        parameters = pool.standardized(parameters, 1);
        var query = 'UPDATE category SET C_Name = ? where C_ID = ?';
        connection.query(query, parameters, function (error, results, fields) {
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

//updateCategory(["aa","6"]);

function deleteCategory(parameters) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        parameters = pool.standardized(parameters, 1);
        var query = 'DELETE category where C_ID = ?';
        connection.query(query, parameter, function (error, results, fields) {
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

//deleteCategory(["6"]);
