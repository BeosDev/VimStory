var router = require('express').Router();;
var Auth = require('../auth');

router.use(Auth.isAdmin);

router.use('/books',require('./books.admin'));
router.use('/categories',Auth.isAdmin,require('./category.admin'));
router.use('/users',Auth.isAdmin,require('./users.admin'));
router.use('/account',require('./account.admin'));
module.exports = router;  