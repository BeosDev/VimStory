var passport = require('passport');
LocalStrategy = require('passport-local').Strategy,
    UserModel = require('../models/user'),
    userSchemaValid = require('./validator').userSchema,
    Joi = require('joi');


function isValided(username, password) {
    const result = Joi.validate({
        Username: username,
        Password: password,
    }, userSchemaValid);
    console.log(result);
    if (result.error) return false;
    return true;
}

module.exports = function () {

    passport.serializeUser(function (user, done) {
        done(null, user);
    })

    passport.deserializeUser(function (user, done) {
        done(null, user);
    })

    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, username, password, done) {
        var User = new UserModel.getOneUserViaUserName(username);
        if (!isValided(username, password)) {
            return done(null, false, req.flash('loginMessage',"Tài khoản hoặc mật khẩu không hợp lệ"));
        }
        User.once('results', function (results) {
            if (results.length !== 0 && UserModel.validPassword(password, results[0].Password)) {
                return done(null, results[0]);
            }
            return done(null, false, req.flash('loginMessage', 'Tài khoản hoặc mật khẩu không đúng, xin vui lòng kiểm tra lại'));
        })
        User.once('error', function (err) {
            return done(null, false, req.flash('loginMessage', 'Tài khoản hoặc mật khẩu không đúng, xin vui lòng kiểm tra lại'));
        })
    }))



}