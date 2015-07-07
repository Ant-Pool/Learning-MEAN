var express = require('express');
var router = express.Router();
var userService = require("../services/user-service");

/* Global Vars */
var respond;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
    res.render('signup', {
        status: ''
    });
});

router.post('/signup', function(req, res, next) {
    respond = userService.addUser(req.body, function() {
        signupRes(res);
    });
    
});

function signupRes(res){
    if (!respond)
        res.send("Thanks for signing up!");
    else
        res.render('signup', {
            status: 'Username exists'
        });
}

module.exports = router;
