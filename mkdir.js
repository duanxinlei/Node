var fs=require("fs");
fs.mkdir("duan",function(err){
	if(err){
		console.log("创建失败");
		return;
	}
	console.log("创建成功");
});