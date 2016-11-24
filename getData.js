var http=require("http");
var cheerio=require("cheerio");
var url="http://www.imooc.com/learn/177";
http.get(url,function(res){
	var html="";
	res.on("data",function(data){
		html+=data;
	})
	res.on("end",function(){
		var $=cheerio.load(html);
		var duan=$(".chapter").find("h3");
		console.log(duan.text());
	})
})