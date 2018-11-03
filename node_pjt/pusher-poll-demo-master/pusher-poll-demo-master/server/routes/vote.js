var express = require('express');
var router = express.Router();

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '639258',
  key: '5985beebd573e3b810b5',
  secret: 'b2b7398ee17f6b440202',
  cluster: 'eu',
  encrypted: true
});

// /* Vote
router.post('/', function(req, res, next) {
  pusher.trigger('poll', 'vote', {
    points: 10,
    framework: req.body.framework
  });
  res.send('Voted');
});

module.exports = router;
