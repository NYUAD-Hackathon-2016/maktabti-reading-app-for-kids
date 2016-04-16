var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/', function(req, res, next) {  
    res.send({
      status: true,
      data: {
          id: 1,
          title: 'A Mighty Flier',
          thumbnail: 'http://bing.com/th?q=hummingbird',
          content : [
              {
                  type: 'text',
                  data:"What is two inches tall, can hover in mid-air, and flies in every direction including backwards?\
                  It’s not an insect. The answer is the bee hummingbird." 
              },
              {
                  type : 'image',
                  data:'http://bing.com/th?q=hummingbird'
              }
              ,
              {
                  type:'text',
                  data:""
              }
              ,
              {
                  type:'text',
                  data : ""
                 
              }
           
              
          ],
          categories: {
        id: 1,
        title: 'Sports',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4sxM2QW5rdHwIAeny0HCHDBwjtgoLIiYJ20fJOxi3FSoEtlhaA'
        }           
          
     }
    });
});

module.exports = router;
