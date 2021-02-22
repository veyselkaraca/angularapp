//Install express server
const express = require('express');
const path = require('path');
var router=express.Router();

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angularapp'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/angularapp/index.html'));
});
router.get('/', function (req, res) {
    res.send('Wiki home page');
  })
  
  // About page route.
  router.get('/about', function (req, res) {
    res.send('About this wiki');
  })
  
  module.exports = router;
app.listen(process.env.PORT || 8080);