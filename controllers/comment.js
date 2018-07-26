var commentMoldel = require("../models/comment");

function addComment(req,res){
    var comment = commentMoldel.addcomment(req.body);
    var commnetLength = req.body.C_Content.toString().length;
   /* if(commnetLength > 250){
        return res.render('index/readBook',{
            title: 'Error',
            errorMessage:''
        });
    }*/ 
    comment.once('results',function(results){
        console.log(results);
        if (results.affectedRows > 0)
            res.redirect('/comments');
        else res.end('error');
    });
    comment.once('error',function(err){
        res.end('error');
    })
}

function getComments(req,res,next){
    var comment = categoryMoldel.getcomment();
    comment.once('results', function(data){
        if(data.length>0){
            return data;
        }
        else res.end("error");
    });
    comment.once('error',function(err){
        res.end('err');
    })
}

module.exports = {
    addComment,
    getComments
}