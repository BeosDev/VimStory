var categoryMoldel = require("../models/category");

function getCategories(req,res,next){
    var categories = new categoryMoldel.getCategories();
    categories.on("results", function(data){
        
    })
}

module.exports = {
    getCategories
}