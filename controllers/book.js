var bookModel = require('../models/book');



function getBooks(req,res,next){
    var books = new bookModel.getBooks;
<<<<<<< HEAD
    books.on('results',function (data){
        //console.log(data);
=======
    books.on('result',function(result){
        
        console.log(result[1]);
>>>>>>> nana
        res.render('admin/adminBook', { title: 'Manage book - Vimstory',data:data});
    })
}

   
module.exports = {
    getBooks
}