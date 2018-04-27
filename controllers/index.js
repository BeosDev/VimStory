var bookModel = require('../models/book');
var categoryModel = require('../models/category');
function getBooks(req, res, next, num) {
    var books = new bookModel.getBooks;
    var category = new categoryModel.getCategories();
    books.on('results', function (data) {
        if (data.length > 0) {
            category.once('results', function (categoryData) {
                if (categoryData.length > 0) {
                    res.render('index', {
                        title: 'Home - VimStory',
                        data: data,
                        categories: categoryData,
                        pageNum: num
                    }, function (err, html) {
                        res.end(html);
                    });
                } else res.end('error');
            });
        } else res.end('error');

    });
}


module.exports = {
    getBooks
}