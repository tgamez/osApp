

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var express = require('express');
app = express();

/* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.htm')
 });

//app.use(express.logger());

app.use("/", express.static(__dirname + '/public'));

app.get(/^(.+)$/, function(req, res){
	console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});

var server = app.listen(server_port,function() {
	console.log('Express server started on port %s', server.address().port);	
});
