var router = require('express').Router();;
var authAdmin = require('../auth').authAdmin;

//router.use(authAdmin);

router.use('/books',require('./books.admin'));
router.use('/category',require('./category.admin'));
router.use('/users',require('./users.admin'));

module.exports = router;