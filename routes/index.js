var router = require('express').Router();;

router.use('/',require('./home'));
router.use('/login',require('./login'));
router.use('/logout',require('./logout'));
router.use('/book',require('./book'));
router.use('/admin',require('./admin'));
router.use('/user',require('./user'))

module.exports = router;