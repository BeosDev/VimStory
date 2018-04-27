var bookModel = require('../models/book');
 var categoryModel = require('../models/category');

function getBooks(req, res, next,num,ageNum,cid) {
    var books
    if((ageNum===null || ageNum ==='') && (cid === null || cid === '' ))
    {
         books= new bookModel.getBooks;
    }
    else if(ageNum != null && ageNum != '') 
    {
        books = new bookModel.getBooksAge(ageNum);
    }
    else 
    {
        books = new bookModel.getBooksCategory(cid);
    }
    
    var category = new categoryModel.getCategories();
    
    books.on('results', function (data) {
        if (data.length > 0) {
            category.once('results', function (categoryData) {
                if (categoryData.length > 0) {
                   console.log('ahiahi');
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