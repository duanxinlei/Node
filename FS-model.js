var fs=require("fs");
fs.open("test.txt","r+",function(err,succ){
	if(err){
		console.log("file");
		return;
	}
	console.log("文件打开成功");
});
