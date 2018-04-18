var bookModel = require('../models/book');



function getBooks(req,res,next){
    var books = new bookModel.getBooks;
    books.on('results',function(results){      
        //console.log(results[1]);
        res.writeHead(200);
        res.render('admin/adminBook', { title: 'Manage book - Vimstory',data:results});
    })
}

function addBook(req,res,next){
    
    var B_Name = req.body.B_Name;
    var B_Content = req.body.B_Content;
    var books = new bookModel.addBook({B_Name:B_Name,B_Content:B_Content});
    books.on('results',function(results){
        console.log(req);
        //res.send('add successfully');
        res.redirect('/adminBook');
        //getBooks();
    })
}

   
module.exports = {
    getBooks,
    addBook
}