var UserModel = require('../models/user');

function getUsers(req, res) {
    console.log('ok');
    var user = UserModel.getUsers();
    user.once('results', function (results) {
        if (results.length > 0) {
            res.render('admin/adminUsers', {
                title: "Manage Category - vimstory",
                data: results,
                title: 'User Management'
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
    console.log(req.body);
    delete req.body.RePassword;
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

function getAddUserPage(req,res){
    res.render('admin/addUser',{title: 'New User'});
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

function getUpdateUserPage(req,res,id,path){
    var user = new UserModel.getOneUserViaId(id);
    user.once('results',results => {
        res.render(path,{User: results[0], title: 'Update User'});
    })
    user.once('error',err => res.end('err'));
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

function getOneUser(req, res) {
    console.log('get one user');
    var sessionUser = req.user;
        console.log(sessionUser);
        if(sessionUser!=null){
            res.render('index/user/profile', {
                title: "Manage Account - vimstory",
                data: sessionUser
            });
        }
        else res.redirect('/');
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getAddUserPage,
    getUpdateUserPage,
    getOneUser
}