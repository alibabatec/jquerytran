/**
 * Created by Alibaba on 5/1/2016.
 */
$(function () {
    /*Showing button click*/
    
    
    
    $('#btnSet').on('click', f1);        
    $('#btnSet').on('click', f2);
    $('#btnSet').click(f3);
    
    function f1() {
        alert(this.id + " : is clicked");
    };
    
    function f2() {
        $('#txtName').val('hello Benjamin');        
    }
    
    function f3(){
        console.log('Benjamin Second Call');
    }
});
