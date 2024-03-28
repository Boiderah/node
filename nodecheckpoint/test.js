var http = require(`http`)

http.createServer(function(req, res){
    res.end('Hello world\n');
}).listen(8081);
console.log('Server listening on port 8081')