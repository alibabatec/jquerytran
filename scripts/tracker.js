$(function(){	
	var x= 1;
	var jqX = $.post("../scripts/insertscript.js", {name:'alibaba'}, function(data, textStatus, jqxhr){
		//console.log(data);
		console.log("Insilde Callback : "+x++);
	})		
	.fail(function(data, textStatus, jqxhr){
		console.log("fail :"+ x++);
	})
	.then(function(data, textStatus, jqxhr){
		console.log("then success :"+ x++);
	}, function(data, textStatus, jqxhr){
		console.log("then fail :"+ x++);
	})
	.done(function(data, textStatus, jqxhr){
		console.log("done :"+ x++);
	})
	.always(function(data, textStatus, jqxhr){
		console.log("always :"+x++);
	});
	
	
	
	$.get("../scripts/insertscript.js");
	
	
	
	console.log("At Last :"+ x++);
});