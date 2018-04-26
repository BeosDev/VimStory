var router = require('express').Router();
var userController = require('../../controllers/user');

router.get('/',function(req,res){
    userController.getUsers(req,res);
});

router.post('/add',function(req,res){
    userController.addUser(req,res);
})

router.get('/add',function(req,res){
    userController.getAddUserPage(req,res);
})

router.get('/delete/:id',function (req,res){
    console.log(req.params);
    userController.deleteUser(req,res);
})

router.post('/update',function (req,res){
    userController.updateUser(req,res);
})

module.exports = router;