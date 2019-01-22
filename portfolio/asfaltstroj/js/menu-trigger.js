$(document).ready(function(){
    $('.open_nav').click(function (e) { 
        e.preventDefault();
        $('.nav_gadgets').slideToggle(600);
        $('.open_nav').hover(function(){
            $(this).attr('data-content','bar');
            $(this).css('background','url(../images/nav_trigger2.svg)');
        });
    });
 });