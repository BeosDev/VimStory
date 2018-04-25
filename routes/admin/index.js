<<<<<<< HEAD
var router = require('express').Router();;
var authAdmin = require('../auth').authAdmin;

//router.use(authAdmin);

router.use('/books',require('./books.admin'));
router.use('/categories',require('./category.admin'));
router.use('/users',require('./users.admin'));

=======
var router = require('express').Router();;
var authAdmin = require('../auth').authAdmin;

//router.use(authAdmin);

router.use('/books',require('./books.admin'));
router.use('/category',require('./category.admin'));
router.use('/users',require('./users.admin'));

>>>>>>> develope
module.exports = router;