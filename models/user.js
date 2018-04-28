var executeQuery = require('../config/database');
var bcrypt = require('bcrypt-nodejs');

function getUsers() {
    var query = 'SELECT * FROM user';
    return new executeQuery(query);
}

function getOneUserViaId(id) {
    var query = `SELECT * FROM user WHERE U_ID = '${id}'`;
    return new executeQuery(query);
}

function getOneUserViaUserName(username){
    var query = `SELECT * FROM user WHERE Username = '${username}'`;
    return new executeQuery(query);
}

function addUser(paramters) {
    paramters.Password = genHash(paramters.Password);
    var query = 'INSERT INTO user SET ?;';
    return new executeQuery(query, paramters);
}

function updateUser(paramters, id) {
    if (paramters.password !== undefined && paramters.password.length > 0)
        paramters.Password = genHash(paramters.Password);
    var query = `UPDATE user SET ? WHERE U_ID = ${id};`;
    return new executeQuery(query, paramters);
}

function deleteUser(id) {
    var query = `Delete FROM user WHERE U_ID = ${id};`;
    return new executeQuery(query);
}

function genHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(6));
}

function validPassword(rawPw, pwHashed) {
    return bcrypt.compareSync(rawPw, pwHashed);
}


module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getOneUserViaId,
    getOneUserViaUserName,
    genHash,
    validPassword
}