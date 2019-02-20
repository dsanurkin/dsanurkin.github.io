$(document).ready(function(){
    $('.ex').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });
      $('.request-btn').magnificPopup({
        type:'inline',
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });
      $('.callback_link').magnificPopup({
        type:'inline',
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });
      $('.slider').slick({
        // autoplay: true,
        arrows: true,

    });
 });