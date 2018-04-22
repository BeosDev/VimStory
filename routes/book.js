var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');

/* GET home page. */
router.get('/read/:id', function(req, res, next) {
    var path = 'index/readBook';
    bookController.getOneBook(req,res,next,path);
});
router.get('/bookContent', function(req, res, next) {
    //var path = 'index/readBookContent';
    //bookController.getOneBook(req,res,next,path);
    res.render('index/readBookContent');
});

module.exports = router;