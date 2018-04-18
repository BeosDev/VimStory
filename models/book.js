var executeQuery = require('../config/database');

function getBooks() {
    var query = 'SELECT * FROM book';
    return new executeQuery(query);
}

function addBook(paramters) {
    var query = 'INSERT INTO book SET ?;';
    return new executeQuery(query, paramters);
}

function updateBook(paramters, id) {
    var query = `UPDATE book SET ? WHERE B_ID = ${id};`;
    return new executeQuery(query, paramters);
}

function deleteBook(id) {
    var query = `Delete FROM book WHERE B_ID = ${id};`;
    return new executeQuery(query);
}

//var k = new getBooks();
//k.on('results',function(results){
  //  console.log(results[1]);
//})

module.exports = {
    getBooks,
    addBook,
    deleteBook,
    updateBook
}

