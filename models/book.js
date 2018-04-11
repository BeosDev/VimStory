var pool = require('../config/database');
var EventEmitter = require('events').EventEmitter;

function getBooks() {
    var emitter = this;
    pool.getConnection(function (err, connection) {
        // Use the connection
        var query = 'SELECT * FROM book';
        connection.query(query , function (error, results, fields) {
            // And done with the connection.
            connection.release();

            // Handle error after the release.
            if (error) {
                throw error;
            }
            // Don't use the connection here, it has been returned to the pool
            emitter.emit('results',results);
        });
    });
}

getBooks.prototype = new EventEmitter();

//var k = new getBooks();
//k.on('results',results => console.log(results));



function addBook(book) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        //paramters = pool.standardized(paramters,8);
        //let book = {B_Name:'hihi'};
        var query = 'INSERT INTO book SET ?;';
        connection.query(query,book, function (error, results, fields) {
            // And done with the connection.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
            console.log(results);
        });
    });
}

function updateBook(book,id) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        //paramters = pool.standardized(paramters,8);
        //let book = {B_Name:'hihi'};
        var query = `UPDATE book SET ? WHERE B_ID = ${id};`;
        connection.query(query,book, function (error, results, fields) {
            // And done with the connection.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
            console.log(results);
        });
    });
}

function deleteBook(id) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        //paramters = pool.standardized(paramters,8);
        //let book = {B_Name:'hihi'};
        var query = `DELETE FROM book WHERE B_ID = ${id};`;
        connection.query(query, function (error, results, fields) {
            // And done with the connection.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
            console.log(results);
        });
    });
}


//var B_Name = 'hihi';
//addBook({B_Name:'Linh123456'});
//var B_ID = 7;
//var B_Name = 'asdsad';
//deleteBook(B_ID)
module.exports = {
    getBooks,
    addBook,
    deleteBook
}