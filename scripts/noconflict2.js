/*** Created by Alibaba on 5/1/2016. */
jQuery.noConflict(); //comment this line and see prototypejs error.
jQuery(function($){
    alert('JQuery : '+$('#txtName').val());
});

jQuery(document).ready(function($){
    alert('JQuery : '+$('#txtName').val());
});

(function($){
    alert('JQuery : '+$('#txtName').val());
})(jQuery);

$(document).ready(function(){
    alert('JQuery : '+$('#txtName').val());
});

alert('PrototypeJS : ' +$('txtName').value);

var x =35; /*debug here to show $('txtName') and $('#txtName')*/
