var router = require('express').Router();;
var Auth = require('../auth');

router.use(Auth.isLoggined);

router.use('/books',require('./books.admin'));
router.use('/categories',require('./category.admin'));
router.use('/users',Auth.isAdmin,require('./users.admin'));

module.exports = router;