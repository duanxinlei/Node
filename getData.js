var http = require("http");
var cheerio = require("cheerio");
var fs = require("fs");
// var n = 648315241;

function trim(str) {
	str = str.replace(/\ +/g, ""); //去掉空格
    str = str.replace(/[ ]/g, "");    //去掉空格
    str = str.replace(/[\r\n]/g, ""); //去掉回车换行
	return str;
}
function getData(){//递归
	var database = [];
	var url = "http://jingyan.baidu.com/article/72ee561abae82ce16138dfba.html";
	http.get(url,function(res){
		var html = "";
		res.on("data",function(data){
			html += data;
		})
		res.on("end",function(){
			var $ = cheerio.load(html);
			// var chapters = $(".chapter");
			// for(var i = 0 ; i < chapters.length;i++){
			// 	var obj = {
			// 		title:"",
			// 		chapter:[]
			// 	}

			// 	chapters.eq(i).find(".chapter-info").remove();
			// 	var chapters = $(".chapter");
			// 	var title = trim(chapters.eq(i).find("strong").text());
			// 	//trim移除字符串左右两端的空格
			// 	for(var j = 0; j < chapters.eq(i).find(".J-media-item").length; j++){
			// 		var chapter = trim(chapters.eq(i).find(".J-media-item").eq(j).text());
			// 		chapter = chapter.replace("开始学习","");
			// 		obj.chapter.push(chapter);//
			// 	}
			// 	obj.title = title;
			// 	database.push(obj);
			// }
			
			var duan=$(".content-listblock-text").find("p");
			console.log(duan.text().toString());
			// fs.writeFile("data/data"+n+".txt",JSON.stringify(database),function(error){
			// 	if(error){
			// 		console.log("写入" + n +"文件失败");
			// 		return;
			// 	}
			// 	console.log("写入" + n + "文件成功");
			// 	console.log("继续寻找" + (++n) + "数据");
			//getData();
			// })
		})
	})

}
getData();