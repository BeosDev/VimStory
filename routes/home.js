var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  indexController.getBooks(req,res,next,1,null,null);
});

router.get('/page/:num', function(req, res, next) {
  indexController.getBooks(req,res,next,req.params.num,null,null);
});

router.get('/age/:ageNum/page/:num', function(req, res, next) {
  indexController.getBooks(req,res,next,req.params.num,req.params.ageNum,null);
});

router.get('/category/:cid/page/:num', function(req, res, next) {
  indexController.getBooks(req,res,next,req.params.num,null,req.params.cid);
});

router.get('/bookContent', function(req, res, next) {
  //var path = 'index/readBookContent';
  //bookController.getOneBook(req,res,next,path);
  res.render('index/readBookContent');
});

module.exports = router;
