let path = require("path");

const homeController = {
    home: function(req, res, next) {
        res.render("home"); 
    }
}; 

module.exports = homeController; 