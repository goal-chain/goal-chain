
var express = require('express');
var axios = require('axios');

var app = express();

app.get('/getsteps/:token', function(req, res) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + req.params.token;
          axios.get('https://api.fitbit.com/1/user/-/activities/date/2016-11-05.json', {})
                  .then(function (response) {
                    res.send({steps:response.data.summary.steps});
                  })
                  .catch(function (error) {
                    res.send({error: 'epic'})
                  });
});

app.listen(3000);
console.log('Listening on port 3000...');
