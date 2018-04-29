var executeQuery = require('../config/database');

function getAuthors() {
    var query = 'SELECT * FROM author';
    return new executeQuery(query);
}

function getOneAuthor(id) {
    var query = `SELECT * FROM author WHERE A_ID = ${id};`;
    return new executeQuery(query);
}

function addAuthor(paramters) {
    var query = 'INSERT INTO author SET ?;';
    return new executeQuery(query, paramters);
}

function updateAuthor(paramters, id) {
    var query = `UPDATE author SET ? WHERE A_ID = ${id};`;
    return new executeQuery(query, paramters);
}

function deleteAuthor(id) {
    var query = `Delete FROM author WHERE A_ID = ${id};`;
    return new executeQuery(query);
}

function getAuthorsByBookId(id) {
    var query = `SELECT author.A_Name FROM a_b_relationship inner join author on a_b_relationship.A_ID = author.A_ID  WHERE B_ID = ${id};`;
    return new executeQuery(query);
}
module.exports = {
    getAuthors,
    addAuthor,
    deleteAuthor,
    updateAuthor,
    getOneAuthor,
    getAuthorsByBookId
}

