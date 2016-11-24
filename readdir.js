var fs=require("fs");
fs.readdir("duan",function(err,files){
	if(err){
		console.log("读取失败");
		return;
	}
	console.log("success:"+files);//files:数组（对象）
});