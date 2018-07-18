(function($){
  $('#navigation-button').click(function() {
    $('#navigation-button').toggleClass( "button-open" );
    $('.navigation-menu').toggleClass( "navigation-menu-open");
  });

  $('#team-button').click(function() {
    $('.team-component-wrap').toggleClass( "team-wrap-on");
    $('.team-button').toggleClass( "team-button-on");
    $('#team').toggleClass( "team-dropped");
  });

  $('#basic-info-button').click(function() {
    $('.basic_info_wrap').toggleClass( "basic_info_wrap_on" );
    $('.basic_info_button').toggleClass( "basic_info_button_on" );
  });

  $('.privacy-button').click(function() {
    $('#privacy-policy').toggleClass("privacy-policy-on");
  })

  // SCROLL TO ACTION FROM MENU

  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
        $('#navigation-button').addClass( "button-dark" );
        $('#navigation-button').toggleClass( "button-open" );
        $('.navigation-menu').toggleClass( "navigation-menu-open");
    }

  });

  // CHANGE NAVIGATION BUTTON WHEN BELOW HERO IMAGE

  function changeNavButton(){
    $(document).on( 'scroll', function(){
      var toTheTop = $(document).scrollTop();
      var theWindowHeight = $(window).height();
      if ((toTheTop + 10) > theWindowHeight) {
        $('#navigation-button').addClass( "button-dark" );
      } else {
        $('#navigation-button').removeClass( "button-dark" );
      }
    });
  }

  changeNavButton();

  // MAKE THE HERO IMAGE FULL SCREEN

  function fullscreen(){
      jQuery('#hero').css({
          height: jQuery(window).height()
      });
  }

  fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();
       changeNavButton();
  });

  // Tooltipster initialization and options


    $('.tooltip').tooltipster();


})(jQuery);