$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){

  $(".bg").interactive_bg();
  $(window).resize(function() {
      $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      })
   })

   var typed = new Typed('.typed', {
     strings: ["Websites", "Ecommerce Platforms", "Web Apps", "Mobile Apps", "Marketing Solutions"],
     typeSpeed: 40,
     backSpeed: 20,
     loop: true,
     cursorChar: '_',
     loopCount: Infinity
   });

  $("#counter").countdown({
  until: new Date(2017, 11, 01),
  format: 'dHMS'
  });

  $("#counter_wrapper").fitText(1.2, {
  minFontSize: '20px',
  maxFontSize: '50px'
  });

});
