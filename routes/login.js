var express = require('express');
var router = express.Router();
var passport = require('passport');
var auth = require('./auth');

router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        if (req.user.U_Authorization === 0)
            return res.redirect('/admin/books');
        else
            return res.redirect('/profile');
    }
    res.render('login', {
        loginMessage: req.flash('loginMessage')
    });
    req.flash('loginMessage','');
})
router.post('/', passport.authenticate('local-login', {
    successRedirect: '/login',
    failureRedirect: '/login',
    failureFlash: true
}))
module.exports = router;