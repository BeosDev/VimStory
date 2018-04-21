var bookModel = require('../models/book');
var formidable = require('formidable'); 
var fs = require('fs');

function getBooks(req, res, next) {
    var books = new bookModel.getBooks;

    books.once('results', function (data) {
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
    var Name;
    var Content;
    var Description;
    var newpath;

    var form =  new formidable.IncomingForm();
    //set directory folder
    form.uploadDir = "../public/img/";
    //xử lý upload
    form.parse(req,function (err, fields, file) {
        Name = fields.B_Name;
        Content= fields.B_Content;
        Description = fields.B_Description;
        console.log('add book');
        //path tmp in server
        var path = file.B_imageurl.path;
        if(file.B_imageurl.name.toString()!=''){
        //set up new path
            console.log('save img file')
            newpath = form.uploadDir + file.B_imageurl.name;
            
            fs.rename(path, newpath, function (err) {
                if (err) throw err;    
            });
        }
        else{
            fs.unlink(path, (err) => {
                if (err) throw err;
                console.log(path+' was deleted');
            });
        }
        var books = new bookModel.addBook({
            B_Name: Name,
            B_Content: Content,
            B_Description: Description,
            B_imageurl :'img/'+file.B_imageurl.name
        });
        req.isRedirect = false;
        books.once('results', function (results) {
            if (results.affectedRows > 0) {
                req.isRedirect = true;
                next();
            }
        });
        books.once('error', function (err) {
            next();
        });
    });
    
}

function deleteBook(req,res,next){
    var books = new bookModel.deleteBook(req.params.id);
    req.isRedirect = false;
    books.once('results',function(results){
        if(results.affectedRows > 0){
            req.isRedirect = true;
            next();
        }
    });
    books.once('error', function (err) {
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
    books.once('results',function(results){
        if(results.affectedRows > 0){
            res.redirect('/adminBook');
        }
    });
    books.once('error', function (err) {
        res.redirect('/adminBook');
    });
}

function getOneBook(req, res, next,path,titleBook) {
    var books = new bookModel.getOneBook(req.params.id);

    books.once('results', function (data) {
        if (data.length > 0) {
            var titleBook = data[0].B_Name;
            console.log(data[0].B_PublishDate);
            res.render(path, {
                title: titleBook,
                data: data[0]
            }, function (err, html) {
                res.end(html);
            })
        }
        else res.end('error');

    });
}

module.exports = {
    getBooks,
    addBook,
    deleteBook,
    updateBook,
    getOneBook
}