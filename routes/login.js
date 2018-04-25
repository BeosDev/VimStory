var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/',function(req,res,next){
    res.render('login');
})
router.post('/',passport.authenticate('local-login',{failureRedirect: '/login'}),function(req,res,next){
    res.end('ok');
})
module.exports = router;