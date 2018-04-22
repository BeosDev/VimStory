var router = require('express').Router();;

router.use('/books',require('./books.admin'));
router.use('/category',require('./category.admin'));
router.use('/users',require('./users.admin'));

module.exports = router;