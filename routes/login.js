var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login',function(req,res,next){
    res.render('login',{});
})
router.post('/login',passport.authenticate('local-login'),function(req,res,next){
    res.end('ok');
})
module.exports = router;