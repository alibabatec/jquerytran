jQuery.noConflict();
(function($){
	//$("span:even").css({color:'pink'});
	//$('span').filter(':even').css({color: 'red'});
	$('span').filter(function(index){
		return index%4==0;
	}).css({color: 'red'});
	
	$("span:contains('Sachin')").css('color', 'blue');
	$("span:contains('Sachin')").css({'text-decoration': 'underline'});	
	
	
	$('span').filter(function(){
		return $($(this)[0]).text().indexOf($('#searchText').val()) != -1 ;
	}).css({'color':'pink'});
	
	
	$('#cmdSearch').on('click', Search);
	$('#cmdHtml').on('click', convertHmtl);
	$('#cmdText').on('click',convertText);
	$('#cmdAppend').on('click',dAppend);
	$('#cmdAfter').on('click',dAfter);
	$('#cmdAppendTo').on('click',dAppendTo);
	$('#cmdPrependTo').on('click',dPrependTo);
	$('#cmdRemove').on('click',dRemove);
	$('#cmdEmpty').on('click',dEmpty);
	
	$('#cmdPink').on('click',dPink);
	$('#cmdBlue').on('click',dBlue);
	
	function dBlue(){
		$('p:eq(1)').removeClass('pinktheme');
		$('p:eq(1)').addClass('bluetheme');
		
		
	};
	function dPink(){
		$('p:eq(1)').removeClass('bluetheme');
		$('p:eq(1)').addClass('pinktheme');
	};
	
	function dRemove(){
		$('p').remove(".text2");
	};
	
	function dEmpty(){
		$('p').empty(".text2");		
	};
	
	
	
	function dAppend(){
		$('p').append("Append");
	};
	
	function dPrependTo(){
		$('span:eq(2)').prependTo('p');		
	};
	function dAppendTo(){
		//$('p').appendTo("AppendTo");
		//$('p').appendTo("AppendTo");
		//$('<span>India</span>').appendTo('p');
		$('span:eq(2)').appendTo('p');
		
		
		
	};
	
	function dAfter(){
		$('p').after("After");
	};
	
	function convertText(){
		$('span').text(function(index, prev){
			return prev.split('').reverse().join('') + index;
		});
		
	};
	
	function Search(){
		$('span').css({'color':'black'});
		$('span').filter(function(){
			return $($(this)[0]).text().indexOf($('#searchText').val()) != -1 ;
		}).css({'color':'pink'});
	};
	
	function convertHmtl(){
		$('span').html(function(index, originalVal){
			return "Earlier : " + originalVal + " and now : Nothing" + index;
		});
	};
	
	
	
	
	//$("span:contains('Sachin')").css( "text-decoration", "underline" );
	
})(jQuery);