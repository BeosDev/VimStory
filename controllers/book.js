var bookModel = require('../models/book');



function getBooks(req,res,next){
    var books = new bookModel.getBooks;
    books.on('results',function (data){
        //console.log(data);
        res.render('admin/adminBook', { title: 'Manage book - Vimstory',data:data});
    })
}

module.exports = {
    getBooks
}