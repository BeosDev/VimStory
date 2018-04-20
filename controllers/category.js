var categoryMoldel = require("../models/category");
var formidable = require('formidable'); 
var fs = require('fs');

function getCategories(req,res,next){
    var categories = new categoryMoldel.getCategories();
    console.log("a");
    categories.on("results", function(data){
        console.log(data.length);
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
    var ID;
    var Name;

    var form = new formidable.IncomingForm();

    form.parse(req, function(err,fields, file){
        ID = fields.C_ID;
        Name = fields.C_Name;

        var categories = new categoryMoldel.addCategory({
            C_ID : ID,
            C_Name : Name
        });

        req.isRedirect = false;

        categories.on("results", function(results){
            if(results.affectedRow > 0){
                req.isRedirect = true;
                next();
            }
        });
        categories.on("error", function(err){
            next();
        });
    })
}


module.exports = {
    getCategories
}