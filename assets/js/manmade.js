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

  $('.privacy-button').click(function() {
    $('#privacy-policy').toggleClass("privacy-policy-on");
  })

  // CHANGE COLOR OF ELEMENTS ON LOAD

  // var randColor = Math.floor(Math.random() * 2);
  // console.log(randColor);
  // if (randColor === 0) {
  //   $('.color-theme').addClass( "color-theme-magenta" );
  //   $('.color-theme-line').addClass( "color-theme-line-magenta" );
  //   $('.color-theme-team').addClass( "color-theme-team-magenta" );
  //   $('.color-theme-select').addClass( "color-theme-select-magenta" );
  // } 

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


    $('.tooltip').tooltipster({
      side: ['left', 'top'],
      maxWidth: 230
    });

  // add dropdown to the test pressing

  for(var i=1; i<=24; i++){
      var select = document.getElementById("test_pressing_amount");
      var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i-1;
    option.value = i-1;
  }

  // Change text of vinyl color selector

  $( "input[name=vinyl_color]" ).on("change", function() {
    var colorVal = this.value;
    switch (colorVal) {
      case 'vinyl_color_black':
         $('#vinyl_color_text').html('BLACK (default)');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_black_disc.png');
         break;
      case 'vinyl_color_transparent':
         $('#vinyl_color_text').html('TRANSPARENT');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_transparent_disc.png');
         break;
      case 'vinyl_color_white':
         $('#vinyl_color_text').html('WHITE');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_white_disc.png');
         break;
      case 'vinyl_color_gold':
         $('#vinyl_color_text').html('GOLD');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_gold_disc.png');
         break;
      case 'vinyl_color_yellow':
         $('#vinyl_color_text').html('YELLOW');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_yellow_disc.png');
         break;
      case 'vinyl_color_yellow_translucent':
         $('#vinyl_color_text').html('YELLOW TRANSLUCENT');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_yellow_translucent_disc.png');
         break;
      case 'vinyl_color_orange':
         $('#vinyl_color_text').html('ORANGE');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_orange_disc.png');
         break;
      case 'vinyl_color_red':
         $('#vinyl_color_text').html('RED');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_red_disc.png');
         break;
      case 'vinyl_color_red_translucent':
         $('#vinyl_color_text').html('RED TRANSLUCENT');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_red_translucent_disc.png');
         break;
      case 'vinyl_color_blue':
         $('#vinyl_color_text').html('BLUE');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_blue_disc.png');
         break;
      case 'vinyl_color_blue_translucent':
         $('#vinyl_color_text').html('BLUE TRANSLUCENT');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_blue_translucent_disc.png');
         break;
      case 'vinyl_color_green':
         $('#vinyl_color_text').html('GREEN');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_green_disc.png');
         break;
      case 'vinyl_color_green_translucent':
         $('#vinyl_color_text').html('GREEN TRANSLUCENT');
         $('#vinyl_color_disc').attr('src', 'img/vinyl_color_green_translucent_disc.png');
         break;
      default:
        console.log('no match');
    }
  });

  // Hide default field for label dropdown

  $( "input[name=label_color_radios]" ).on("change", function() {
    var labelChecked = this.value;
    switch (labelChecked) {
      case 'label_print_1c':
        $('#color_of_label').addClass('color_of_label_on');
        break;
      case 'label_print_4c':
        $('#color_of_label').addClass('color_of_label_on');
        break;
      case 'label_print_default':
        $('#color_of_label').removeClass('color_of_label_on');
        break;
      default:
        $('#color_of_label').removeClass('color_of_label_on');
    }
  });

  $( "input[name=sleeves_color_radios]" ).on("change", function() {
    var sleeveChecked = this.value;
    switch (sleeveChecked) {
      case 'sleeves_print_1c':
        $('#type_of_sleeve').addClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').removeClass('type_of_sleeve_color_off');
        break;
      case 'sleeves_print_4c':
        $('#type_of_sleeve').addClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').removeClass('type_of_sleeve_color_off');
        break;
      case 'sleevs_print_default':
        $('#type_of_sleeve').removeClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        break;
      default:
        $('#type_of_sleeve').removeClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
    }
  });

  $( "input[name=cover_color_radios]" ).on("change", function() {
    var coverChecked = this.value;
    switch (coverChecked) {
      case 'cover_print_1c':
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').removeClass('type_of_cover_color_off');
        break;
      case 'cover_print_4c':
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').removeClass('type_of_cover_color_off');
        break;
      case 'cover_print_default':
        $('#type_of_cover').removeClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
        break;
      default:
        $('#type_of_cover').removeClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
    }
  });


})(jQuery);