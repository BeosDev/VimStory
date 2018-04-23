var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  indexController.getBooks(req,res,next);
});
router.get('/bookContent', function(req, res, next) {
  //var path = 'index/readBookContent';
  //bookController.getOneBook(req,res,next,path);
  res.render('index/readBookContent');
});

module.exports = router;
