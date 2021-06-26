var express = require('express');
var router = express.Router();
const request = require('request');
var cors = require('cors')


/* GET home page. */
router.get('/', cors(), function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', cors(), function (req, res, next) {
    const apiOptions = {
      server: 'https://jsonplaceholder.typicode.com/posts'
    };
  
    const requestOptions = {
      url: apiOptions.server,
      method: 'GET',
      json: {}
    };

    request(requestOptions, (err, response, body) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else if (response.statusCode === 200) {
        console.log(body);
        res.send(body);
      } else {
        console.log(response.statusCode);
      }
  });
});



module.exports = router;
