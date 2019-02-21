$(document).ready(function(){
    $('.open_nav').click(function (e) { 
        e.preventDefault();
        $('.nav_gadgets').slideToggle(600);
    });
 });