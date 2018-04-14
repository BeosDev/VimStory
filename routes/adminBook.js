var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book')
var categoryController = require("../controllers/category");
/* GET home page. */

router.get('/', function(req, res, next) {
    //bookController.getBooks(req,res,next);
    categoryController.getCategories(req,res,next);
});

module.exports = router;
