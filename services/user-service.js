var User = require("../models/user").User;


function isUserExist(username) {
    User.findOne({
        'username': username
    }, function(err, data) {
        if (err) return false;
        return true;
    });
    return false;
}

exports.addUser = function(obj, next) {
    if (isUserExist(obj.username))
        return false;
    else {
        var newUser = new User({
            username: obj.username.toLowerCase(),
            password: obj.password.toLowerCase()
        });
        newUser.save();
    }
    return true;
};