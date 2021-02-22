//Install express server
const express = require('express');
const path = require('path');
var router=express.Router();

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angularapp'));

app.get('/', function(req,res) {
    
res.sendFile(path.join('/dist/angularapp/index.html'));
});
app.get('/second', function(req,res) {
    
    res.sendFile(path.join('/dist/angularapp/src/app/mysecondcomponent'));
    });
  
  module.exports = router;
app.listen(process.env.PORT || 8080);