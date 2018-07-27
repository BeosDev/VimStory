var executeQuery = require("../config/database");

function addComment(comment){
    var query = 'insert u_comment set ?';
    return new executeQuery(query, comment);
}

function getComments(){
    var query = 'select * from u_comment set ?';
    return new executeQuery(query);
}

function getCommentsByBookId(bookId){
    var query = 'select * from u_comment where B_ID = ?';
    return new executeQuery(query, bookId);
}

module.exports = {
    addComment,
    getComments,
    getCommentsByBookId
}