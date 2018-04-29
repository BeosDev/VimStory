var express = require('express');
var router = express.Router();
var categoryController = require('../../controllers/category');

//Category
router.get("/", function(req,res,next){
    categoryController.getCategories(req,res);
})

router.post("/add",function(req,res,next){
    categoryController.addCategory(req,res,next);
})

router.post('/update',function(req,res,next){
    categoryController.updateCategory(req,res,next);
});

router.get('/delete/:id', function (req, res, next) {
    categoryController.deleteCategory(req,res,next);
});

module.exports = router;