var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');

/* GET home page. */
router.get('/read/:id', function(req, res, next) {
    var path = 'index/readBook';
    bookController.getOneBook(req,res,next,path);
});

module.exports = router;