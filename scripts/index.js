/**
 * Created by Alibaba on 5/1/2016.
 */
$(function () {
    /*Showing button click*/
    $('#btnSet').on('click',function () {
        alert(this.id + " : is clicked");
    });
    debugger;
    /*Setting text value*/
    $('#btnSet').on('click', function () {
        $('#txtName').val('hello');
    })
});
