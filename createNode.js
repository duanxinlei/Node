const http = require('http');
var fs=require("fs");
const hostname = '127.0.0.1';
const port = 3000;
var url=require("url");
var querystring=require("querystring");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  var value=querystring.parse(url.parse(req.url).query);//favicon.ico
  	if(value.username=="admin"){
  		fs.readFile("login.txt",function(err,data){
  			if(err){
  				consoe.log("读取失败");
  				return;
  			}
  			console.log(data.toString());
  			res.end(data);

  		})

  		
  	}
  	else{
  			res.end("hellow");
  		}
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});