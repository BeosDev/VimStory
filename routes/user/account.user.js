var router = require('express').Router();
var userController = require('../../controllers/user');

router.get('/',function(req,res){
    userController.getUpdateUserPage(req, res,req.user.U_ID,'admin/account');
})

module.exports = router;
