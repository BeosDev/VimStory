var router = require('express').Router();;

router.use('/books',require('./books.admin'));
router.use('/users',require('./users.admin'));

module.exports = router;