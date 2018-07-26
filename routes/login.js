var express = require('express');
var router = express.Router();
var passport = require('passport');
var auth = require('./auth');

router.get('/',function(req,res){
    if (req.isAuthenticated()){
        if (req.user.U_Authorization === 0)
            return res.redirect('/admin/books');
        else
            return res.redirect('/profile');
    }
    res.render('login');
})
router.post('/',passport.authenticate('local-login',{successRedirect: '/login',failureRedirect: '/login'}))
module.exports = router;