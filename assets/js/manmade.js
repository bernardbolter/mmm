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

  // If Vinyl Size 12" selected then show options

  $( "#manufacturing_12inch" ).on("change", function() {
    $('#vinyl_size_12_double_triple').toggleClass("vinyl_12_inch_double_on");
  });

  // Change text of vinyl color selector

  $( "input[name=vinyl_color]" ).on("change", function() {
    var colorVal = this.value;
    switch (colorVal) {
      case 'vinyl_color_black':
         $('#vinyl-color-disc-text').html('Black');
         $('#vinyl-color-disc-text-span').addClass( "vinyl-color-disc-text-span-show" );
         $('#vinyl-color-disc').removeClass();
         $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap black-disc");
         $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_white':
         $('#vinyl-color-disc-text').html('White');
         $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
         $('#vinyl-color-disc').removeClass();
         $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap white-disc");
         $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_gold':
         $('#vinyl-color-disc-text').html('Gold');
         $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
         $('#vinyl-color-disc').removeClass();
         $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap gold-disc");
         $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_yellow':
        $('#vinyl-color-disc-text').html('Yellow');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap yellow-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_yellow_translucent':
        $('#vinyl-color-disc-text').html('Yellow Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap yellow-translucent-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_orange':
        $('#vinyl-color-disc-text').html('Orange');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap orange-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_red':
        $('#vinyl-color-disc-text').html('Red');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap red-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_red_translucent':
        $('#vinyl-color-disc-text').html('Red Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap red-translucent-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_blue':
        $('#vinyl-color-disc-text').html('Blue');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap blue-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_blue_translucent':
        $('#vinyl-color-disc-text').html('Blue Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap blue-translucent-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_green':
        $('#vinyl-color-disc-text').html('Green');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap green-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      case 'vinyl_color_green_translucent':
        $('#vinyl-color-disc-text').html('Green Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap green-translucent-disc");
        $('input[name=transparent').prop('checked', false);
         break;
      default:
        console.log('no match');
    }
  });

  // Handle the Transparent checkbox

  $("input[name=transparent").on("change", function() {
    if ($("input[name=transparent").is(':checked')) {
      $('#vinyl-color-disc-text').html('Transparent');
      $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
      $('#vinyl-color-disc').removeClass();
      $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap transparent-disc");
    } else {
      $('#vinyl-color-disc-text').html('Black');
      $('#vinyl-color-disc-text-span').addClass( "vinyl-color-disc-text-span-show" );
      $('#vinyl-color-disc').removeClass();
      $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap black-disc");
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

  // Hide and show options for sleeves

  $( "input[name=sleeves_color_radios]" ).on("change", function() {
    var sleeveChecked = this.value;
    console.log(sleeveChecked)
    switch (sleeveChecked) {
      case 'sleeves_black':
        $('#type_of_sleeve').removeClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        break;
      case 'sleeves_white':
        $('#type_of_sleeve').removeClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        break;
      case 'sleeves_4color':
        $('#type_of_sleeve').addClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').removeClass('type_of_sleeve_color_off');
        break;
      default:
        $('#type_of_sleeve').removeClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
    }
  });

  // Variable changes for selection of cover

  $( "input[name=cover_color_radios]" ).on("change", function() {
    var coverChecked = this.value;
    switch (coverChecked) {
      case 'cover_disco':
        $('#color_of_disco_bag').removeClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
        break;
      case 'cover_solid_color':
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').removeClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
        break;
      case 'cover_print_4c':
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').removeClass('type_of_cover_color_off');
        break;
      default:
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
    }
  });

  // Variables for disco bag color image

  $( "#color_of_disco_bag").on("change", function() {
    var colorOfDisco = $("#color_of_disco_bag").find(":selected").text();
    switch (colorOfDisco) {
      case 'Black':
        $("#disco_bag_image").attr("src", "img/disco_black.png");
      break;
      case 'White':
        $("#disco_bag_image").attr("src", "img/disco_white.png");
      break;
      case 'Brown':
        $("#disco_bag_image").attr("src", "img/disco_brown.png");
      break;
      default:
        $("#disco_bag_image").attr("src", "img/disco_black.png");
    }
  });

  // Variables for solid color image with or without a hole

  $( "#solid_color_cover").on("change", function() {
    solidColorFunc();
  });

  $("#solid_color_cover_hole").on("change", function() {
    solidColorFunc();
  })

  function solidColorFunc() {
    var solidColor = $( "#solid_color_cover").find(":selected").text();
    var holeOrNo = '';
    if ($('#solid_color_cover_hole').is(':checked')) {
      holeOrNo = 'yes';
    } else {
      holeOrNo = 'no';
    }
    $("#solid_color_hole").removeClass('solid_color_off');

    if (((solidColor === "Solid Black") || (solidColor === "Solid Black | Inside Out")) && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_black.png");
    } else if (((solidColor === "Solid Black") || (solidColor === "Solid Black | Inside Out")) && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_black_hole.png");
    } else if (((solidColor === "Solid White") || (solidColor === "Solid White | Inside Out")) && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_white_hole.png");
    } else if (((solidColor === "Solid White") || (solidColor === "Solid White | Inside Out")) && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_white.png");
    } else if (solidColor === "Solid Brown") {
      $("#cover_solid_image").attr("src", "img/cover_solid_brown.png");
      $("#solid_color_hole").addClass('solid_color_off');
    }
  }

  // SHow and hide image with hole for 4 color cover options

  $("#4_color_cover_hole").on("change", function() {
    if ($('#4_color_cover_hole').is(':checked')) {
      $("#4color_hole_image").attr("src", "img/cover_4color_hole.png");
    } else {
      $("#4color_hole_image").attr("src", "img/cover_4color.png");
    }
  });


})(jQuery);