var router = require('express').Router();;
var Auth = require('../auth');

router.use(Auth.isUser);

router.get('/',function(req,res){
    res.send('homepage user');
})

router.use('/books',require('./books.user'));
router.use('/account',require('./account.user'));

module.exports = router;  