var router = require('express').Router();
var passport = require('passport');
router.get('/',function(req,res){
    res.send('register form');
});

router.post('/', passport.authenticate('local-register', {
    successRedirect: '/ok',
    failureRedirect: '/register',
    failureFlash: true
}))

module.exports = router;