var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');
/* GET home page. */

router.get('/adminBook', function (req, res) {
    bookController.getBooks(req, res);
    //res.render('admin/adminBook', { title: 'Add new book - Vimstory'});
});


router.get('/addBook', function (req, res, next) {
    res.render('admin/addBook', {
        title: 'Add new book - Vimstory'
    });
});

router.post('/addnewbook', function (req, res, next) {
    bookController.addBook(req, res, next);
}, function (req, res, next) {
    if (req.isRedirect === true)
        res.redirect('./adminBook');
});

module.exports = router;