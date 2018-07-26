var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');
var commentController = require('../controllers/comment');

/* GET home page. */
router.get('/read/:id', function(req, res, next) {
    var path = 'index/readBook';
    bookController.getOneBook(req,res,next,path);
});

router.post('/read/:id',function(req,res,next){
    commentController.addComment(req,res);
});

router.get('/bookContent', function(req, res, next) {
    //var path = 'index/readBookContent';
    //bookController.getOneBook(req,res,next,path);
    res.render('index/readBookContent');
});

router.get('/',function(req,res,next){
    bookController.searchBooks(req,res,next);
})

module.exports = router;