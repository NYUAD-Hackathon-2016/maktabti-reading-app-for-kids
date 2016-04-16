var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {  
    res.send({
      status: true,
      data: [
        {
          id: 1,
          title: 'Sports',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4sxM2QW5rdHwIAeny0HCHDBwjtgoLIiYJ20fJOxi3FSoEtlhaA'
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
