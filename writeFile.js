var fs=require("fs");
fs.writeFile("text.txt","55555",function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log("success");
	fs.readFile("text.txt",function(err,data){
		if(err){
			console.log("我失败了！！");
			return;
		}
			console.log("nav:"+data.toString());
	});
});