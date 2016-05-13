(function(){
	$(function(){
		function c1(){
			console.log("I am");
		};
		function c2(x){ 
			console.log("Number : "+x );
		};
		function c3(x){
			console.log("But not Number :"+ x);
		};
		function c4(){
			console.log("India and state is " + this.state());
		};
		
		
		var dfd = $.Deferred();
		
		dfd.progress(function(d){
			console.log("Progress1 : "+ d + " and State is "+ this.state());
		});
		
		dfd.progress(function(d){
			console.log("Progress2 : "+ d + " and State is "+ this.state());
		
		});
		
		
		var mpr = dfd.fail(function(xmm){
			console.log(xmm);
		});
		
		
		
		dfd.notify("932");
		dfd.notify("931");
		dfd.notify("930");
		
		dfd.done(c1, [c2,c3], c4);
		
		dfd.progress(function(p){
			console.log(" Pro");
		});
		
		
		dfd.reject(" I a mfailed");
		
		dfd.resolve(9);
	});
})();