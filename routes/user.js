var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/change/pass',(req,res,next)=>{
    var sessionUser = req.user;
    if(req.user != null){
        res.render('index/user/userChangePassword', {
            title: "Manage Account - vimstory",
            data: sessionUser,
            errorMessage: req.flash('errorMessage')
        });
        req.flash('errorMessage','');
    }else{
        res.redirect('/');
    }
});

router.post('/change/pass',(req,res,next)=>{
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

  //edit book userAddBook
  router.post('/books/edit', function(req, res,next) {
    bookController.updateBook(req,res,next);
  });
  router.get('/books/edit/:id', function (req, res, next) {
    bookController.getUserUpdateBookPage(req, res, next);
  });
  //add book
  router.get('/books/add', function (req, res, next) {
      bookController.getUserAddBookPage(req,res,next);
    
  });

  router.post('/books/add', function (req, res, next) {
      bookController.userAddBook(req, res, next);
  });
  //delete book
  router.get('/books/delete/:id', function (req, res, next) {
    bookController.deleteBook(req,res,next);
  }, function (req, res, next) {
      if (req.isRedirect === true)
          res.redirect('/user/books');
  });


module.exports = router;