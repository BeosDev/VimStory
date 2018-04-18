var bookModel = require('../models/book');
var formidable = require('formidable'); 
var fs = require('fs');

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

    var form =  new formidable.IncomingForm();
    var newpath;
    form.uploadDir = '../public/img/';
    Name= req.body.B_Name,
    Content= req.body.B_Content,
    Description= req.body.B_Description;

    form.parse(req,function (err, fields, file) {
        var path = file.B_imageurl.path;
        newpath = form.uploadDir + file.B_imageurl.name;
        var books = new bookModel.addBook({
            B_Name: Name,
            B_Content: Content,
            B_Description: Description,
            B_imageurl :newpath
        });
        
       // console.log('newpath= '+books.B_imageurl);
        fs.rename(path, newpath, function (err) {
            if (err) throw err;
        });
        req.isRedirect = false;
        books.on('results', function (results) {
            if (results.affectedRows > 0) {
                req.isRedirect = true;
                next();
            }
        })
        books.on('error', function (err) {
            next();
        });
        
    });
    

    
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