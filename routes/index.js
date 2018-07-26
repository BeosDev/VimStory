var router = require('express').Router();;
var userController = require('../controllers/user');

router.use('/',require('./home'));
router.use('/login',require('./login'));
router.use('/logout',require('./logout'));
router.use('/book',require('./book'));
router.use('/admin',require('./admin'));
router.get('/profile', function(req, res) {
    userController.getOneUser(req,res);
  });
module.exports = router;