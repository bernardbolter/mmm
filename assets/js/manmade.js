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

  $('#mastering-info-button').click(function() {
    $('.mastering_wrap').toggleClass( "mastering_wrap_on" );
    $('.mastering_info_button').toggleClass( "mastering_info_button_on" );
  });

  $('#manufacturing_button').click(function() {
    $('.manufacturing_wrap').toggleClass( "manufacturing_wrap_on" );
    $('.manufacturing_button').toggleClass( "manufacturing_button_on" );
  });

  $('#manufacturing_switch_button').click(function() {
    $('.manufactoring_out_wrap').toggleClass( "manufactoring_out_wrap_on" );
    $('.manufactoring_in_wrap').toggleClass( "manufactoring_in_wrap_on" );
    $('.manufacturing_switch_button').toggleClass( "manufacturing_switch_button_on" );
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