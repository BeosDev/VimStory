<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vimstory - Hompage' });
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {

  indexController.getBooks(req,res,next);
});

module.exports = router;
>>>>>>> master
