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

router.get('/read/:bid/like', function(req, res) {
    if (req.isAuthenticated())
        bookController.likeBook(req,res);
    else return res.json({isLike: 'false'});
});

router.get('/read/:bid/countlike', function(req, res) {
    bookController.countLike(req,res);
});

router.get('/bookContent', function(req, res, next) {
    //var path = 'index/readBookContent';
    //bookController.getOneBook(req,res,next,path);
    res.render('index/readBookContent');
});

router.get('/',function(req,res,next){
    bookController.searchBooks(req,res,next);
});

router.post('/read/:id/cmt',(req,res)=>{
    commentController.addComment(req,res);
});

router.get('/getcomment/:id',function(req,res,next){
    commentController.getComments(req,res);
})

module.exports = router;