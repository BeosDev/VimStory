var executeQuery = require("../config/database");



function getCategories() {
        var query = 'SELECT * FROM category';
        return new executeQuery(query);
}

function getCategory(C_ID) {
        var query = `SELECT * FROM category where C_ID = ${C_ID}`;
        return new executeQuery(query);
}

function addCategory(category) {
       var query = 'INSERT INTO category SET ?';
       return new executeQuery(query, category);
}

function updateCategory(category, C_ID) {
        var query = `UPDATE category SET ? where C_ID = ${C_ID}`;
        return new executeQuery(query, category);
}


function deleteCategory(C_ID) {
        var query = `DELETE category where C_ID = ${C_ID}`;
        return new executeQuery(query);
}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}
