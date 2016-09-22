"use strict";
var router = require('express').Router();
var Twitter = require('twitter');
var config = require('./../../config.js')

var client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});

function process_get_tweets(req, res, next) {
    var options = {
        screen_name: 'kamaalrkhan',
        count: 10
    };
    client.get('statuses/user_timeline', options, function(err, data) {
        var latest_tweets = data.map(function(x) {
            return x.text;
        });
        var obj = {
            tweets: latest_tweets
        }
        db.krk.insert(obj, function(err, krk_tweets) {
            if (err) return next(err);
            return res.send(krk_tweets)
        })
    });
}

router.get('/', process_get_tweets);

module.exports = router;