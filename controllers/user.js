var UserModel = require('../models/user');

function getUsers(req, res) {
    var user = UserModel.getUsers();
    user.once('results', function (results) {
        if (results.length > 0) {
            res.render('admin/adminUsers', {
                title: "Manage Category - vimstory",
                data: results
            })
        }
        else
            res.end('err');
    })
    user.once('error',function(err){
        res.end('err');
    })
}

/*
ID
Username
Password
U_authorization
U_Fullname
U_Address
U_Phone
U_Sex
U_Email
*/

function addUser(req,res){
    var user = UserModel.addUser(req.body);
    user.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/users');
        else res.end('error');
    });
    user.once('error',function(err){
        res.end('error');
    })
}

function updateUser(req,res){
    var user = UserModel.updateUser(req.body,req.body.U_ID);
    user.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/users');
        else res.end('error');
    });
    user.once('error',function(err){
        res.end('error');
    })
}

function deleteUser(req,res){
    var user = UserModel.deleteUser(req.params.id);
    user.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/users');
        else res.end('error');
    });
    user.once('error',function(err){
        res.end('error');
    })
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}