var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {  
    var articleid = req.query.articleid;
    
    // ignore what article id is for now.
    res.send({
      status: true,
      data: [
        {
          type: "fill in the blank",
          question: 'The cow was in the %blank',
          options: [
              "house",
              "field",
              "barn"
          ]
        },
        
        {
          id: 2,
          title: 'Art',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4sxM2QW5rdHwIAeny0HCHDBwjtgoLIiYJ20fJOxi3FSoEtlhaA'
        }
      ]
    });
    
});

module.exports = router;
