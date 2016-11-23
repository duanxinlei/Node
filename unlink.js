var fs=require("fs");
fs.unlink("text.txt",function(err){
	if(err){
		console.log("删除失败");
	}
	console.log("删除成功");
})