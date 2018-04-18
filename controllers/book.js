var bookModel = require('../models/book');

function getBooks(req, res, next) {
    var books = new bookModel.getBooks;

    books.on('results', function (data) {
        if (data.length > 0) {
            res.render('admin/adminBook', {
                title: 'Manage book - Vimstory',
                data: data
            }, function (err, html) {
                res.end(html);
            })
        }
        else res.end('error');

    });
}

function addBook(req, res, next) {
    var B_Name = req.body.B_Name;
    var B_Content = req.body.B_Content;
    var books = new bookModel.addBook({
        B_Name: B_Name,
        B_Content: B_Content
    });
    req.isRedirect = false;
    books.on('results', function (results) {
        //       console.log(req);
        //res.send('add successfully');

        if (results.affectedRows > 0) {
            req.isRedirect = true;
            next();
        }
        //getBooks();
    })
    books.on('error', function (err) {
        next();
    })
}

function deleteBook(req,res,next){
    var books = new bookModel.deleteBook(req.params.id);
    req.isRedirect = false;
    books.on('results',function(results){
        if(results.affectedRows > 0){
            req.isRedirect = true;
            next();
        }
    });
    books.on('error', function (err) {
        next();
    });
}

function updateBook(req,res,next){
    var B_ID = req.body.B_ID;
    var data = {
        B_Name : req.body.B_Name,
        B_Description : req.body.B_Description
    }
    var books  = new bookModel.updateBook(data,B_ID);
    req.isRedirect = false;
    books.on('results',function(results){
        if(results.affectedRows > 0){
            req.isRedirect = true;
            next();
        }
    });
    books.on('error', function (err) {
        next();
    });
}

module.exports = {
    getBooks,
    addBook,
    deleteBook,
    updateBook
}