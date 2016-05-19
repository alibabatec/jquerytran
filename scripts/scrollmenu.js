(function($){	
	$(function(){
		$('#dvScroll').scroll(function(event){
		var menuOffset = $('#spMenu').offset().top + $(this).scrollTop() + "px";
		//$('#spMenu').animate({top: menuOffset}, 'slow');	});
	
	
		var div = $("spMenu");
    	div.animate({top: menuOffset}, "slow");
	
});
		
		
	});

})(jQuery);