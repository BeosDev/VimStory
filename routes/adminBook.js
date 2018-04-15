var express = require('express');
var router = express.Router();
var bookController = require('../controllers/book')
/* GET home page. */

router.get('admin/adminBook', function(req, res, next) {
   bookController.getBooks(req,res,next);
});

module.exports = router;
