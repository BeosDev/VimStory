var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/',function(req,res,next){
    if (req.isAuthenticated())
        return res.redirect('/admin/books');
    res.render('login');
})
router.post('/',passport.authenticate('local-login',{successRedirect: '/admin/books',failureRedirect: '/login'}))
module.exports = router;