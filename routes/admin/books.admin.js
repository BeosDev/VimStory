var express = require('express');
var router = express.Router();
var bookController = require('../../controllers/book');
/* GET home page. */

router.get('/', function (req, res) {
    bookController.getBooks(req, res);
    //res.render('admin/adminBook', { title: 'Add new book - Vimstory'});
});


router.get('/add', function (req, res, next) {
    bookController.getAddBookPage(req,res,next);
    
});

router.post('/add', function (req, res, next) {
    bookController.addBook(req, res, next);
});


router.get('/update/:id', function (req, res, next) {
    res.render('admin/updateBook', {
        title: 'updatebook - Vimstory',
        id:req.params.id
    });
});

router.post('/update',function(req,res,next){
    bookController.updateBook(req,res,next);
});

router.get('/delete/:id', function (req, res, next) {
    //console.log('route'+req.params.id);
    bookController.deleteBook(req,res,next);
}, function (req, res, next) {
    if (req.isRedirect === true)
        res.redirect('/admin/books');
});

module.exports = router;
