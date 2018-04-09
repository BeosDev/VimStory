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

function getCategory(C_ID) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        //parameters = pool.standardized(parameters, 1);
        var query = `SELECT * FROM category where C_ID = ${C_ID}`;
        connection.query(query, function (error, results, fields) {
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                throw error;
            }
            // Don't use the connection here, it has been returned to the pool
            console.log(results);
            return results;
        });
    });
}

//getCategory(["1"]);

function addCategory(category) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        //parameters = pool.standardized(parameters, 2);
        var query = 'INSERT INTO category SET ?';
        connection.query(query, category, function (error, results, fields) {
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                throw error;
            }
            // Don't use the connection here, it has been returned to the pool
            console.log(results);
            return results;
        });
    });
}
// var C_Name = "aaa";
// addCategory({C_Name});

function updateCategory(category, C_ID) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        //parameters = pool.standardized(parameters, 1);
        var query = `UPDATE category SET ? where C_ID = ${C_ID}`;
        connection.query(query, category, function (error, results, fields) {
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                throw error;
            }
            // Don't use the connection here, it has been returned to the pool
            console.log(results);
            return results;
        });
    });
}

// var C_ID = 1, C_Name = "AGV";
// updateCategory({C_Name},C_ID);

function deleteCategory(C_ID) {

    pool.getConnection(function (err, connection) {
        // Use the connection
        //parameters = pool.standardized(parameters, 1);
        var query = `DELETE category where C_ID = ${C_ID}`;
        connection.query(query, function (error, results, fields) {
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                throw error;
            }
            // Don't use the connection here, it has been returned to the pool
            console.log(results);
            return results;
        });
    });
}

//deleteCategory(["6"]);
