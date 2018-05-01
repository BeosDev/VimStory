var router = require('express').Router();
var userController = require('../../controllers/user');
var Joi = require('joi');
var userSchemaValid = require('../../config/validator').userSchema;

function validUser(req, res, next) {
    if (req.body.RePassword !== req.body.Password)
        return res.redirect('/admin/users/add');
    Joi.validate({
        Username: req.body.Username,
        Password: req.body.Password,
        U_Email: req.body.U_Email,
        U_Address: req.body.U_Address,
        U_Phone: req.body.U_Phone
    }, userSchemaValid, function (err, value) {
        if (err) {
            console.log(err);
            return res.redirect('/admin/users/add');
        } else next();
    })
}

router.get('/', function (req, res) {
    userController.getUsers(req, res);
});

router.post('/add', validUser, function (req, res) {
    userController.addUser(req, res);
})

router.get('/add', function (req, res) {
    userController.getAddUserPage(req, res);
})

router.get('/delete/:id', function (req, res) {
    console.log(req.params);
    userController.deleteUser(req, res);
})

router.get('/update/:id', function (req, res) {
    userController.getUpdateUserPage(req, res,req.params.id,'admin/updateUser');
})

router.post('/update', validUser, function (req, res) {
    delete req.body.RePassword;
    userController.updateUser(req, res);
})

module.exports = router;