/*** Created by Alibaba on 5/1/2016. */
jQuery.noConflict(); //comment this line and see prototypejs error.

jQuery(document).ready(function($){
    alert('JQuery : '+$('#txtName').val());
});

/*$(document).ready(function(){
    alert('JQuery : '+$('#txtName').val());
});


$(function(){
    alert('JQuery : '+$('#txtName').val());
});*/

jQuery(function($){
    alert('JQuery : '+$('#txtName').val());
});


/*(function($){
    alert('JQuery : '+$('#txtName').val());
})(jQuery);*/



alert('PrototypeJS : ' +$('txtName').value);

var x =35; /*debug here to show $('txtName') and $('#txtName')*/
