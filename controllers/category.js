var categoryMoldel = require("../models/category");
var formidable = require('formidable'); 
var fs = require('fs');

function getCategories(req,res,next){
    var categories = new categoryMoldel.getCategories();
    categories.on("results", function(data){
        if(data.length>0){
            res.render("admin/adminCategory",{
                title: "Manage Category - vimstory",
                data: data
            },function(err, html){
                res.end(html);
            })
        }
        else res.end("error");
    });
}

function addCategory(req,res,next){
    var Name;
    var form = new formidable.IncomingForm();

    form.parse(req, function(err,fields, file){
        Name = fields.C_Name;

        var categories = new categoryMoldel.addCategory({
            C_Name : Name
        });

        req.isRedirect = false;
        categories.on('results',function(results){
            if(results.affectedRows > 0){
                req.isRedirect = true;
                next();
            }
        });
        categories.on("error", function(err){
            next();
        });
    });
}

function deleteCategory(req,res,next){
    var categories = new categoryMoldel.deleteCategory(req.params.id);
    req.isRedirect = false;
    categories.on('results',function(results){
        if(results.affectedRows > 0){
            req.isRedirect = true;
            next();
        }
    });
    categories.on('error', function (err) {
        next();
    });
}

function updateCategory(req,res,next){
    var C_ID;
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,file){
        C_ID = fields.C_ID;
        C_Name = fields.C_Name;

        var data = {
            C_Name
        }
        var categories  = new categoryMoldel.updateCategory(data,C_ID);

        req.isRedirect = false;
        categories.on('results',function(results){
            if(results.affectedRows > 0){
                req.isRedirect = true;
                next();
            }
        });
        categories.on('error', function (err) {
            next();
        });
    });
}

module.exports = {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
}