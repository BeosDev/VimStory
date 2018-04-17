var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    UserModel = require('../models/user');
    

module.exports = function(){
    passport.serializeUser(function(user,done){
        done(null,user);
    })

    passport.deserializeUser(function(user,done){
        done(null,user);
    })

    passport.use('local-login',new LocalStrategy({
        usernameField : 'username',
        passwordField: 'password'
    },function(username,password,done){
        var User = new UserModel.getOneUser();
        User.on('result',function(result){
            done(null,result);
        })
        User.on('error',function(err){
            done(null,false);
        })
    }))

    

}