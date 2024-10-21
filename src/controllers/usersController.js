let path = require("path");

let usersController = {
    users: function(req, res, next) {
        res.render('users');
    },
    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
};


module.exports = usersController;