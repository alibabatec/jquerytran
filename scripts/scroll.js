(function($){
	$(function(){
		var x= 0;
		$('#dvBox').scroll(function(sevent){
			$('#dvMsg').text(x++);
			
			var strPos = "<br/> clientHeight : " + sevent.target.clientHeight;
			strPos += "<br/>clientWidth : " + sevent.target.clientWidth;
			strPos += "<br/>clientTop : " + sevent.target.clientTop;
			strPos += "<br/>clientLeft : " + sevent.target.clientLeft;
			strPos += "<br/>offsetHeight : " + sevent.target.offsetHeight;
			strPos += "<br/>offsetWidth : " + sevent.target.offsetWidth;
			strPos += "<br/> offsetTop : " + sevent.target.offsetTop;
			strPos += "<br/>offsetLeft : " + sevent.target.offsetLeft;				
			strPos += "<br/>scrollHeight : " + sevent.target.scrollHeight;
			strPos +=   "<br/>scrollWidth : " + sevent.target.scrollWidth;
			strPos += "<br/>scrollTop : " + sevent.target.scrollTop;
			strPos += "<br/>scrollLeft : " + sevent.target.scrollLeft;
			
			$('#dvScrollPos').html(strPos);
			
		});
		
		$('#cmdScroll').click(function(){
			$('#dvBox').scroll();
			$('#dvBox').scrollTop(30);
			$('#dvBox').scrollLeft(40);
			$('#dvBox').scrollTop();
			$('#dvBox').scrollLeft();
			$('#dvScrollPos').text(strPos);
			
			console.log($('#dvBox').height());
			console.log($('#dvBox').widtht());
			console.log($('#dvBox').innerHeight());
			console.log($('#dvBox').innerWidth());
		});
	});
})(jQuery);