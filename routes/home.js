var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  indexController.getBooks(req,res,next);
});

module.exports = router;