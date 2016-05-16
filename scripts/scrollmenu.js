(function($){	
	$('#dvScroll').scroll(function(event){
		var menuOffset = $('#spMenu').offset().top + $(this).scrollTop() + 'px';
		$('#spMenu').animate({
			top: menuOffset}, {duration: 500, queue:false});
	});
})(jQuery);