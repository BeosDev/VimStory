var categoryMoldel = require("../models/category");

function getCategories(req,res,next){
    var categories = categoryMoldel.getCategories();
    categories.once('results', function(data){
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
    categories.once('error',function(err){
        res.end('err');
    })
}


function addCategory(req,res,next){
    var categories = categoryMoldel.addCategory(req.body);
    console.log(req.body);
    categories.once('results',function(results){
        if (results.affectedRows > 0)
            res.redirect('/admin/categories');
        else res.end('error');
    });
    categories.once('error',function(err){
        res.end('error');
    })
}


function deleteCategory(req,res,next){
    var categories = categoryMoldel.deleteCategory(req.params.id);
    categories.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/categories');
        else res.end('error');
    });
    categories.once('error',function(err){
        res.end('error');
    })
}

function updateCategory(req,res,next){
    var categories = categoryMoldel.updateCategory(req.body,req.body.C_ID);
    categories.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/admin/categories');
        else res.end('error');
    });
    categories.once('error',function(err){
        res.end('error');
    })
}

module.exports = {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
}