var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var myFirebaseRef = new Firebase("https://blistering-fire-8873.firebaseio.com/");

/* GET categories listing. */
router.get('/', function(req, res, next) {  
  myFirebaseRef.child("categories").on("value", function(snapshot) {
      res.send(snapshot.val());
  })
});

module.exports = router;
