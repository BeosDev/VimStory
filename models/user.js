var executeQuery = require('../config/database');

function getUsers() {
    var query = 'SELECT * FROM user';
    return executeQuery(query);
}

function addUser(paramters) {
    var query = 'INSERT INTO user SET ?;';
    return executeQuery(query, paramters);
}

function updateUser(paramters, id) {
    var query = `UPDATE user SET ? WHERE U_ID = ${id};`;
    return executeQuery(query, paramters);
}

function deleteUser(id) {
    var query = `Delete FROM user WHERE U_ID = ${id};`;
    return executeQuery(query);
}

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser
}