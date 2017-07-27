// exposes all API endpoints through folders you can find 
// inside the api folder. the index.js file allows us to 
// include both files just by adding a route path, and 
// callback function

var path = require('path');

/*
  We are doing two different things here:

  Exposing our routes at their respective paths on lines 4 and 5.
  Configuring the server to serve all the Angular files that we will add in the public folder.

*/
module.exports = function(app) {
  app.use('/api/list', require('../api/list'));
  app.use('/api/card', require('../api/card'));

	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
  });
};
