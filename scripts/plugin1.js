(function($){
    $.fn.setCSS = function(){
        this.css({'color':'#336699'});        
        return this; //comment and uncomment this line to show chaining
    };
})(jQuery);


(function($){
    $.fn.reverseMe = function(){
            return this.each(function(){            
                    $(this).text($(this).text().split('').reverse().join(''));
        });    
    };
})(jQuery);

(function($){
    $.fn.setCSSwithOptions = function(options){
        var opt = $.extend({
            color: 'blue',
            fontWeight : 'bold'
        },options);
        
        this.css({
            color: opt.color,
            backgroundColor : opt.bgColor,
            textDecoration : opt.textDecoration
        });
    };
})(jQuery);