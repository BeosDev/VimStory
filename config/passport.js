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
        var User = new UserModel.getOneUser(username);
        User.on('results', function (result) {
            if (result.length === 0)
                return done(null, false);
            return done(null, result[0]);
        })
        User.on('error', function (err) {
            return done(null, false);
        })
    }))



}