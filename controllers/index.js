var bookModel = require('../models/book');

function getBooks(req, res, next) {
    var books = new bookModel.getBooks;

    books.on('results', function (data) {
        if (data.length > 0) {
            res.render('index', {
                title: 'Home - VimStory',
                data: data
            }, function (err, html) {
                res.end(html);
            })
        }
        else res.end('error');

    });
}


module.exports = {
    getBooks
}