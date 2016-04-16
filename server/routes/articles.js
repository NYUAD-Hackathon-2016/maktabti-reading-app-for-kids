var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var myFirebaseRef = new Firebase("https://blistering-fire-8873.firebaseio.com/");

/* GET articles listing. */
router.get('/', function(req, res, next) {  
  var articleid = req.query.id;
  console.log("articles/" + articleid);
  
  myFirebaseRef.child("articles/" + articleid).on("value", function(snapshot) {
      res.send(snapshot.val());
  })
});

module.exports = router;
