var express = require('express');
var router = express.Router();
//var bookController = require('../controllers/book')
/* GET home page. */

router.get('/addBook', function(req, res, next) {
   res.render('admin/addBook', { title: 'Add new book - Vimstory'});
});

module.exports = router;