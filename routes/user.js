var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/change/password',(req,res,next)=>{
    res.send('Change password ' + req.user.U_ID);
});

router.post('/change/password',(req,res,next)=>{
    userController.changUserPassword(req,res);
});

  //
  var bookController = require('../controllers/book');
  router.get('/books', function(req, res) {
    bookController.getUserBooks(req,res);
  });

  //
  router.post('/change/info', function(req, res) {
    userController.updateProfileUser(req,res);
  });

module.exports = router;