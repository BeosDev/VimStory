var bookModel = require('../models/book');
var formidable = require('formidable');
var fs = require('fs');
var createHTML = require('create-html');
var openfpt = require('./utils/openfpt');

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
        } else {
            res.redirect('/admin/books');
            //res.end('error');
        }

    });
}

function addBook(req, res, next) {
    var Name;
    var Content;
    var Description;
    var newpath;
    console.log('ok');
    var form = new formidable.IncomingForm();
    //set directory folder
    form.uploadDir = "../public/img/";
    //form.uploadDir = path.join (__dirname, '/public/img');
    //xử lý upload
    form.parse(req, function (err, fields, file) {
        Name = fields.B_Name;
        Content = fields.B_Content;
        Description = fields.B_Description;
        //path tmp in server
        var path = file.B_imageurl.path;
        if (file.B_imageurl.name.toString() != '') {
            //set up new path
            console.log('save img file')
            newpath = form.uploadDir + file.B_imageurl.name;

            fs.rename(path, newpath, function (err) {
                if (err) throw err;
            });
        } else {
            fs.unlink(path, (err) => {
                if (err) throw err;
                console.log(path + ' was deleted');
            });
        }
        var books = new bookModel.addBook({
            B_Name: Name,
            B_Content: Content,
            B_Description: Description,
            B_imageurl: 'img/' + file.B_imageurl.name,
            C_ID: fields.C_ID,
            B_Age: fields.B_Age,
            B_PublishDate: fields.B_PublishDate
        });
        var maxBookID = new bookModel.getMaxID;

        req.isRedirect = false;
        books.once('results', function (results) {
            //console.log(mp3Link);
            maxBookID.once('results', function (data) {
                //console.log('maxbookid'+data[0].MaxVL);
                var authorArr = fields.hidden.split(",");
                if (fields.hidden != "")
                    for (var i = 0; i < authorArr.length; i++) {
                        var rela = bookModel.setAuthor(data[0].MaxVL, authorArr[i]);
                        console.log(data[0].MaxVL + 'x' + authorArr[i])
                    }
                var textToSpeech = new openfpt(data[0].MaxVL, fields.B_Text);
            });
            if (results.affectedRows > 0) {
                res.redirect('/admin/books');
            }
        });
        books.once('error', function (err) {
            res.redirect('/admin/books');
        });
    });
}

function deleteBook(req, res, next) {
    var books = new bookModel.deleteBook(req.params.id);
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
}

function updateBook(req, res, next) {

    var Name;
    var Content;
    var Description;
    var newpath;
    console.log('ok');
    var form = new formidable.IncomingForm();
    //set directory folder
    form.uploadDir = "../public/img/";
    //form.uploadDir = path.join (__dirname, '/public/img');
    //xử lý upload
    form.parse(req, function (err, fields, file) {
        Name = fields.B_Name;
        Content = fields.B_Content;
        Description = fields.B_Description;

        //path tmp in server
        var path = file.B_imageurl.path;
        if (file.B_imageurl.name.toString() != '') {
            //set up new path
            console.log('save img file')
            newpath = form.uploadDir + file.B_imageurl.name;

            fs.rename(path, newpath, function (err) {
                if (err) throw err;
            });
        } else {
            fs.unlink(path, (err) => {
                if (err) throw err;
                console.log(path + ' was deleted');
            });
        }

        var books = new bookModel.updateBook({
            B_Name: Name,
            B_Content: Content,
            B_Description: Description,
            B_imageurl: 'img/' + file.B_imageurl.name,
            C_ID: fields.C_ID,
            B_Age: fields.B_Age,
            B_PublishDate: fields.B_PublishDate
        }, fields.B_ID);
        var maxBookID = new bookModel.getMaxID;
        req.isRedirect = false;
        books.once('results', function (results) {
            //console.log('maxbookid'+data[0].MaxVL);
            var authorArr = fields.hidden.split(",");
            if (fields.hidden != "")
                for (var i = 0; i < authorArr.length; i++) {
                    var rela = bookModel.updateBookAuthor(fields.B_ID, authorArr[i]);
                    console.log(fields.B_ID + ' update ' + authorArr[i])
                }
            var textToSpeech = new openfpt(fields.B_ID, fields.B_Text);
            if (results.affectedRows > 0) {
                res.redirect('/admin/books');
            }
        });
        books.once('error', function (err) {
            res.redirect('/admin/books');
        });
    });

}

function getOneBook(req, res, next, path, titleBook) {
    var books = new bookModel.getOneBook(req.params.id);

    books.once('results', function (data) {

        if (data.length > 0) {
            var titleBook = data[0].B_Name;
            var html = createHTML({
                title: 'Content',
                head: '<meta name="description" content="example">',
                body: data[0].B_Content
            })

            fs.writeFile('../views/index/readBookContent.ejs', html, function (err) {
                if (err) console.log(err)
            })
            console.log(data[0].B_PublishDate);
            res.render(path, {
                title: titleBook,
                data: data[0]
            }, function (err, html) {
                res.end(html);
            })
        } else res.end('error');

    });
}


var categoryModel = require('../models/category');
var authorModel = require('../models/author');

function getAddBookPage(req, res, next) {
    var category = new categoryModel.getCategories();
    var author = new authorModel.getAuthors();
    category.once('results', function (data) {
        if (data.length > 0) {
            console.log(data);
            //console.log(listCategory);
            author.once('results', function (results) {
                if (results.length > 0) {

                    console.log(results);
                    res.render('admin/addBook', {
                        title: 'Add new book - Vimstory',
                        categories: data,
                        authors: results

                    });
                } else res.end('error');

            })
        } else res.end('error');

    });
}

function getUpdateBookPage(req, res, next) {
    var category = new categoryModel.getCategories();
    var author = new authorModel.getAuthors();
    var book = new bookModel.getOneBook(req.params.id);



    category.once('results', function (data) {
        if (data.length > 0) {
            //console.log(data);
            //console.log(listCategory);
            author.once('results', function (results) {
                if (results.length > 0) {
                    book.once('results', function (bookData) {
                        //console.log(bookData);
                        res.render('admin/updateBook', {
                            title: 'Update book - Vimstory',
                            categories: data,
                            authors: results,
                            book: bookData


                        });
                    });

                } else res.end('error');

            })
        } else res.end('error');

    });
    //});
}
module.exports = {
    getBooks,
    addBook,
    deleteBook,
    updateBook,
    getOneBook,
    getAddBookPage,
    getUpdateBookPage
}