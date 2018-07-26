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
    });
}

function changUserPassword(req,res){
    if(req.user != null){
        var sessionUser = req.user;
        if(sessionUser.Password == req.body.OldPassword){
            if(req.body.NewPassword == req.body.ConfirmNewPassword){
                var user = UserModel.updateUser(sessionUser.U_ID,req.body.newPassword);
                user.once('results',function(results){
                    console.log(results);
                    if (results.affectedRows > 0)
                        res.redirect('/users');
                    else res.end('error');
                });
                user.once('error',function(err){
                    res.end('error');
                });
            }else{
                res.send('Looi');
            }
        }else{
            res.send('Loi');
        }
    }else{
        res.redirect('/');
    }

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
        if(sessionUser!=null){
            var user = UserModel.getOneUserViaUserName(sessionUser.Username);
            user.once('results', function (results) {
                if (results.length > 0) {
                    res.render('index/user/profile', {
                        title: "Manage Account - vimstory",
                        data: results
                    });
                }
                else
                    res.end('err');
            })
            user.once('error',function(err){
                res.end('err');
            })
        }
        else res.redirect('/');
}


function updateProfileUser(req,res){
    var user = UserModel.updateUser(req.body,req.user.U_ID);
    user.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/profile');
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
    deleteUser,
    getAddUserPage,
    getUpdateUserPage,
    getOneUser,
    changUserPassword,
    updateProfileUser
}