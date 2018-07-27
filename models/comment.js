var executeQuery = require("../config/database");

function addComment(comment){
    var query = 'insert u_comment set ?';
    return new executeQuery(query, comment);
}

function getComments(){
    var query = 'select * from u_comment';
    return new executeQuery(query);
}

function getCommentsByBookId(bookId){
    var query = 'select c.C_ID, c.C_Content, c.U_ID, c.B_ID, u.Username, u.U_Fullname from u_comment c join user u on c.U_ID = u.U_ID  where B_ID = ?';
    return new executeQuery(query, bookId);
}

module.exports = {
    addComment,
    getComments,
    getCommentsByBookId
}