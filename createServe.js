var http = require('http');		//引入http模块
var url = require("url")
var querystring = require("querystring")
var fs = require("fs")
var hostname = '127.0.0.1';
var port = 3000;
var data = "";

var server = http.createServer(function(req, res){

  fs.readFile("data/data54.txt",function(error,d){
    if(error){
      console.log("读取文件出错")
      return
    }
    data = d.toString();
  })
  res.statusCode = 200;	//相应状态码
  res.setHeader('Content-Type', 'text/plain'); //相应头
  var params = url.parse(req.url, true);
  var str = params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
  res.end(str);
});

server.listen(port);
console.log("Server running at http://" + hostname + ":" + port)