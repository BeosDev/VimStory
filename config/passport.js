var passport = require('passport');
    LocalStrategy = require('passport-local').Strategy,
    UserModel = require('../models/user');

module.exports = function () {

    passport.serializeUser(function (user, done) {
        done(null, user);
    })

    passport.deserializeUser(function (user, done) {
        done(null, user);
    })

    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function (username, password, done) {
        var User = new UserModel.getOneUserViaUserName(username);
        User.once('results', function (results) {
            if (results.length !== 0 && UserModel.validPassword(password,results[0].Password)){
                return done(null,results[0]);
            }
            return done(null, false);
        })
        User.once('error', function (err) {
            return done(null, false);
        })
    }))



}