var router = require('express').Router();
var passport = require('passport');
router.get('/',function(req,res){
    res.render('register',{registerMessage : req.flash('registerMessage')});
});

router.post('/', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/register',
    failureFlash: true
}));

router.get('/', function(req, res) {
    userController.getOneUser(req,res);
  });

module.exports = router;