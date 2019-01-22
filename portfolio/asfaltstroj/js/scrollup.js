$(document).ready(function(){
   $(window).scroll(function(){
      if ($(this).scrollTop() > 1000) { 
         $('.scrollup').fadeIn();
      } else {
         $('.scrollup').fadeOut();
      }
   });
   $('.scrollup').click(function(e){
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 600);
   }); 
});