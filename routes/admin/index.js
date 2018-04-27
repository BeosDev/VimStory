var router = require('express').Router();;
var isLoggined = require('../auth').isLoggined;

router.use(isLoggined);

router.use('/books',require('./books.admin'));
router.use('/categories',require('./category.admin'));
router.use('/users',require('./users.admin'));

module.exports = router;