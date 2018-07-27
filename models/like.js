var executeQuery = require("../config/database");

function countLikes() {
    var query = 'SELECT count(*) FROM u_like';
    return new executeQuery(query);
}

function getLikeByBid(id){
    var query = 'SELECT * FROM u_like WHERE B_ID = '+id;
    return new executeQuery(query);
}

function addLike(paramters) {
    var query = 'INSERT INTO u_like SET ?;';
    return new executeQuery(query, paramters);
}

function removeLike(bid,uid){
    var query = `DELETE FROM u_like WHERE B_ID = ${bid} AND U_ID = ${uid}`;
    return new executeQuery(query);
}

function isLike(bid,uid){
    var query = `SELECT * FROM u_like WHERE B_ID = ${bid} AND U_ID = ${uid}`;
    return new executeQuery(query);
};

// var k = new getLikeByBid(158);
// k.once("results",res => console.log(res.length));
module.exports = {
    countLikes,
    addLike,
    getLikeByBid,
    removeLike,
    isLike
}