var executeQuery = require('../config/database');

function getBooks() {
    var query = 'SELECT * FROM v_book';
    return new executeQuery(query);
}

function searchBooks(name){
    var query = `select * from book where B_Name like '%${name}%'`;
    return new executeQuery(query);
}

function getOneBook(id) {
    var query = `SELECT * FROM book WHERE B_ID = ${id};`;
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
    var query = `call deleteBook(${id});`;
    return new executeQuery(query);
}
function getMaxID() {
    var query = 'SELECT MAX(B_ID) as MaxVL FROM book;';
    return new executeQuery(query);
}
function setAuthor(book_id,author_id) {
    var query = `INSERT INTO a_b_relationship VALUES(${book_id},${author_id})`;
    return new executeQuery(query);
}

function updateBookAuthor(book_id,author_id) {
    var query = `UPDATE a_b_relationship SET A_ID = ${author_id} WHERE B_ID =  ${book_id}`;
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
    updateBook,
    getOneBook,
    getMaxID,
    setAuthor,
<<<<<<< HEAD
=======
    searchBooks,
>>>>>>> nana
    updateBookAuthor
}

