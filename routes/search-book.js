var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book');


router.get('/search/:name',function(req,res,next){
    bookController.searchBook(req,res,next);
})

module.exports = router;