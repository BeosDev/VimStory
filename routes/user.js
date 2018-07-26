var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.get('/change/password',(req,res,next)=>{
    var sessionUser = req.user;
    if(req.user != null){
    res.render('index/user/userChangePassword',{
        title: "Manage Account - vimstory",
        data: sessionUser
    });
    }else{
        res.redirect('/');
    }
});

router.post('/change/password',(req,res,next)=>{
    userController.changUserPassword(req,res);
});

module.exports = router;