var router = require('express').Router();;

router.use('/',require('./home'));
router.use('/login',require('./login'));
router.use('/book',require('./book'));
router.use('/admin',require('./admin'));

module.exports = router;