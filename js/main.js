jQuery(document).ready(function ($) {

    var addBtnRow = $('#add_row');
    var removeBtnRow = $('#remove_row');

    $(addBtnRow).on('click', function () {
        $('.table-dots-wrapper .table-row:last').clone().appendTo('.table-dots-wrapper').find('.left-side .text,.right-side .text').text('');
    });

    $(removeBtnRow).on('click', function () {
        if($('.table-dots-wrapper .table-row').length > 1) {
            $('.table-dots-wrapper').find('.table-row:last').remove();
        }
    });

   $('.table-dots-wrapper').on('click','.table-row .left-side, .table-row .right-side',function () {
       var text = prompt("Input the text:", '');
       if (text === null) {
           var thisText = $('.text',this).text();
           $('.text',this).html(thisText);
       } else {
           $('.text',this).html(text);
       }
   });

    $('.table-dots-wrapper').on('click','.table-row .del',function () {
        if($('.table-dots-wrapper .table-row').length > 1) {
            $(this).parent().remove();
        }
    });

});