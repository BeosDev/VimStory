var bookModel = require('../models/book');



function getBooks(req,res,next){
    var books = new bookModel.getBooks;
    books.on('result',function(result){
        
        console.log(result[1]);
        res.render('admin/adminBook', { title: 'Manage book - Vimstory',data:data});
    })
}

   
module.exports = {
    getBooks
}