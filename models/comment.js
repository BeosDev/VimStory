var executeQuery = require("../config/database");

function addComment(comment){
    var query = 'insert u_comment set ?';
    return new executeQuery(query, comment);
}

function getComments(){
    var query = 'select * from u_comment set ?';
    return new executeQuery(query);
}
module.exports = {
    addComment
}