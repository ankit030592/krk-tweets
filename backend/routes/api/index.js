var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    return res.send({
        message: "Welcome, but you are not supposed to be here"
    });
});

router.use('/tweets', require('./tweets.js'));

module.exports = router;