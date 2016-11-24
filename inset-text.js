var fs=require("fs");
const file="test.txt";
const File="陈阳：我是傻逼";
fs.readFile(file,function(err,data){
	if(err){
		console.log("文件读取失败");
		return;
	}
	
	console.log(data.toString());
	var newFile=data.toString()+File.toString();
	fs.writeFile(file,newFile,function(err){
		if(err){
			console.log("文件写入失败");
			return;
		}
		console.log("文件写入成功");
	})
})