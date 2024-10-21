let path = require("path");

let productsController = {
    products: function(req, res, next) {
        res.render("products");
    }
};

module.exports = productsController;

