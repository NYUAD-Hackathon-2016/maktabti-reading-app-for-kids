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
              },   
              {
                  type:'text',
                  data:"Most hummingbirds are about three to\
                        five inches long. But the bee hummingbird is\
                        only five centimeters, or approximately two\
                        inches, making it the smallest species of bird\
                        alive today. "
              },
              {
                  type:'text',
                  data : "Really it isn’t bigger than a large\
                          insect. But don’t let its tiny body fool you. This\
                          bird is a fierce flier. It can beat its wings up to 80 times per second. If you ever see one in flight,\
                          you’ll notice its wings are just a blur to the human eye."
                 
              },
              {
                  type: 'text',
                  data: "Hummingbirds are also the only\
                        vertebrates that can hover in one place. Add to that being able to fly backwards and upside\
                        down, and these creatures are amazing flying machines."
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
