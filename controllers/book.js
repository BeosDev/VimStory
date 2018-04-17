var bookModel = require('../models/book');

function getBooks(req, res, next) {
    var books = new bookModel.getBooks;
    /*
    
    */
        books.on('results', function (data) {
            res.render('admin/adminBook', {
                title: 'Manage book - Vimstory',
                data: data
            },function(err,html){
                res.end(html);
            });
           
    })
    
}

function addBook(req, res, next) {

    var B_Name = req.body.B_Name;
    var B_Content = req.body.B_Content;
    var books = new bookModel.addBook({
        B_Name: B_Name,
        B_Content: B_Content
    });


    books.on('results', function (results) {
        //       console.log(req);
        //res.send('add successfully');
        res.redirect('/adminBook');
        res.end();
        //getBooks();
    })
}


module.exports = {
    getBooks,
    addBook
}