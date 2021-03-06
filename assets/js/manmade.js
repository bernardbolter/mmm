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
      case 'Black':
         $('#vinyl-color-disc-text').html('Black');
         $('#vinyl-color-disc-text-span').addClass( "vinyl-color-disc-text-span-show" );
         $('#vinyl-color-disc').removeClass();
         $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap black-disc");
         $('input[name="transparent"]').prop('checked', false);
         break;
      case 'White':
         $('#vinyl-color-disc-text').html('White');
         $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
         $('#vinyl-color-disc').removeClass();
         $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap white-disc");
         $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Gold':
         $('#vinyl-color-disc-text').html('Gold');
         $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
         $('#vinyl-color-disc').removeClass();
         $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap gold-disc");
         $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Yellow':
        $('#vinyl-color-disc-text').html('Yellow');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap yellow-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Yellow Translucent':
        $('#vinyl-color-disc-text').html('Yellow Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap yellow-translucent-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Orange':
        $('#vinyl-color-disc-text').html('Orange');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap orange-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Red':
        $('#vinyl-color-disc-text').html('Red');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap red-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Red Translucent':
        $('#vinyl-color-disc-text').html('Red Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap red-translucent-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Blue':
        $('#vinyl-color-disc-text').html('Blue');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap blue-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Blue Translucent':
        $('#vinyl-color-disc-text').html('Blue Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap blue-translucent-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Green':
        $('#vinyl-color-disc-text').html('Green');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap green-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      case 'Green Translucent':
        $('#vinyl-color-disc-text').html('Green Translucent');
        $('#vinyl-color-disc-text-span').removeClass( "vinyl-color-disc-text-span-show" );
        $('#vinyl-color-disc').removeClass();
        $('#vinyl-color-disc').addClass("vinyl-color-disc-wrap green-translucent-disc");
        $('input[name="transparent"]').prop('checked', false);
         break;
      default:
        console.log('no match');
    }
  });

  // Handle the Transparent checkbox

  $('input[name="transparent"]').on("change", function() {
    if ($('input[name="transparent"]').is(':checked')) {
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
      case 'Black Label':
        $('#amount_black_white_labels').removeClass('labels_bw_hide');
        $('#amount_cmyk_labels').addClass('labels_cmyk_hide');
        break;
      case 'White Label':
        $('#amount_black_white_labels').removeClass('labels_bw_hide');
        $('#amount_cmyk_labels').addClass('labels_cmyk_hide');
        break;
      case 'Four Color Label':
        $('#amount_black_white_labels').addClass('labels_bw_hide');
        $('#amount_cmyk_labels').removeClass('labels_cmyk_hide');
        break;
      default:
        $('#amount_black_white_labels').removeClass('labels_bw_hide');
        $('#amount_cmyk_labels').addClass('labels_cmyk_hide');
    }
  });

  // Hide and show options for sleeves

  $( "input[name=sleeves_color_radios]" ).on("change", function() {
    var sleeveChecked = this.value;
    switch (sleeveChecked) {
      case 'Lined Paper Sleeve':
        $('#lined_paper_sleeve_color').removeClass('lined_paper_sleeve_color_off');
        $('#polylined_sleeve_color').addClass('polylined_sleeve_color_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        $('#amount_paper_lined_sleeves').removeClass('amount_paper_lined_sleeves_hide');
        $('#amount_polylined_sleeves').addClass('amount_polylined_sleeves_hide');
        $('#amount_cmyk_sleeves').addClass('amount_cmyk_sleeves_hide');
        break;
      case 'Polylined Sleeve':
        $('#lined_paper_sleeve_color').addClass('lined_paper_sleeve_color_off');
        $('#polylined_sleeve_color').removeClass('polylined_sleeve_color_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        $('#amount_paper_lined_sleeves').addClass('amount_paper_lined_sleeves_hide');
        $('#amount_polylined_sleeves').removeClass('amount_polylined_sleeves_hide');
        $('#amount_cmyk_sleeves').addClass('amount_cmyk_sleeves_hide');
        break;
      case 'Four Color':
        $('#lined_paper_sleeve_color').addClass('lined_paper_sleeve_color_off');
        $('#polylined_sleeve_color').addClass('polylined_sleeve_color_off');
        $('#type_of_sleeve_color').removeClass('type_of_sleeve_color_off');
        $('#amount_paper_lined_sleeves').addClass('amount_paper_lined_sleeves_hide');
        $('#amount_polylined_sleeves').addClass('amount_polylined_sleeves_hide');
        $('#amount_cmyk_sleeves').removeClass('amount_cmyk_sleeves_hide');
        break;
      default:
        $('#lined_paper_sleeve_color').addClass('lined_paper_sleeve_color_off');
        $('#polylined_sleeve_color').addClass('polylined_sleeve_color_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        $('#amount_paper_lined_sleeves').addClass('amount_paper_lined_sleeves_hide');
        $('#amount_polylined_sleeves').addClass('amount_polylined_sleeves_hide');
        $('#amount_cmyk_sleeves').addClass('amount_cmyk_sleeves_hide');
    }
  });

  // Variable changes for selection of cover

  $( "input[name=cover_color_radios]" ).on("change", function() {
    var coverChecked = this.value;
    switch (coverChecked) {
      case 'Disco Bag':
        $('#color_of_disco_bag').removeClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
        $('#amount_disco_solid_covers').removeClass('amount_disco_solid_covers_off');
        $('#amount_cmyk_covers').addClass('amount_cmyk_covers_off');
        $("input[name='sleeves_color_radios']").prop('disabled', true);
        $('.sleeves_radios').prop('checked', false);
        $('#type_of_sleeve').addClass('type_of_sleeve_off');
        $('#type_of_sleeve_color').addClass('type_of_sleeve_color_off');
        $('#amount_bw_sleeves').addClass('amount_bw_sleeves_hide');
        $('#amount_cmyk_sleeves').addClass('amount_cmyk_sleeves_hide');
        $('#disco_bag_no_sleeve').removeClass('disco_bag_no_sleeve_hide');
        break;
      case 'Solid Color':
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').removeClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
        $('#amount_disco_solid_covers').removeClass('amount_disco_solid_covers_off');
        $('#amount_cmyk_covers').addClass('amount_cmyk_covers_off');
        $("input[name='sleeves_color_radios']").prop('disabled', false);
        $('#disco_bag_no_sleeve').addClass('disco_bag_no_sleeve_hide');
        break;
      case 'One Color':
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').removeClass('type_of_cover_color_off');
        $('#amount_disco_solid_covers').addClass('amount_disco_solid_covers_off');
        $('#amount_cmyk_covers').removeClass('amount_cmyk_covers_off');
        $("input[name='sleeves_color_radios']").prop('disabled', false);
        $('#disco_bag_no_sleeve').addClass('disco_bag_no_sleeve_hide');
        break;
      case 'Four Color':
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').removeClass('type_of_cover_color_off');
        $('#amount_disco_solid_covers').addClass('amount_disco_solid_covers_off');
        $('#amount_cmyk_covers').removeClass('amount_cmyk_covers_off');
        $("input[name='sleeves_color_radios']").prop('disabled', false);
        $('#disco_bag_no_sleeve').addClass('disco_bag_no_sleeve_hide');
        break;
      default:
        $('#color_of_disco_bag').addClass('color_of_disco_bag_off');
        $('#type_of_cover').addClass('type_of_cover_off');
        $('#type_of_cover_color').addClass('type_of_cover_color_off');
        $('#amount_disco_solid_covers').removeClass('amount_disco_solid_covers_off');
        $('#amount_cmyk_covers').addClass('amount_cmyk_covers_off');
        $("input[name='sleeves_color_radios']").prop('disabled', false);
        $('#disco_bag_no_sleeve').addClass('disco_bag_no_sleeve_hide');
    }
  });

  // Change color of Paper Lined Sleeve Image

  $( "#lined_paper_sleeve_color").on("change", function() {
    var colorLinedPaperSleeve = $("#lined_paper_sleeve_color").find(":selected").text();
    switch (colorLinedPaperSleeve) {
      case 'Black':
        $("#lined_paper_sleeve_image").attr("src", "img/sleeve_black.png");
      break;
      case 'White':
        $("#lined_paper_sleeve_image").attr("src", "img/sleeve_white.png");
      break;
      case 'Red':
        $("#lined_paper_sleeve_image").attr("src", "img/sleeve_red.png");
      break;
      case 'Blue':
        $("#lined_paper_sleeve_image").attr("src", "img/sleeve_blue.png");
      break;
      case 'Brown':
        $("#lined_paper_sleeve_image").attr("src", "img/sleeve_brown.png");
      break;
      default:
        $("#lined_paper_sleeve_image").attr("src", "img/sleeve_white.png");
    }
  });

  // Change color of Polylined Image

  $( "#polylined_sleeve_color").on("change", function() {
    var colorPolylinedSleeve = $("#polylined_sleeve_color").find(":selected").text();
    switch (colorPolylinedSleeve) {
      case 'Black':
        $("#polylined_sleeve_image").attr("src", "img/sleeve_black.png");
      break;
      case 'White':
        $("#polylined_sleeve_image").attr("src", "img/sleeve_white.png");
      break;
      default:
        $("#polylined_sleeve_image").attr("src", "img/sleeve_black.png");
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

    if (((solidColor === "Black") || (solidColor === "Select One")) && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_black.png");
    } else if (((solidColor === "Black") || (solidColor === "Select One") || (solidColor === "Black")) && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_black_hole.png");
    } else if ((solidColor === "White") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_white_hole.png");
    } else if ((solidColor === "White") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_white.png");
    } else if ((solidColor === "Brown") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_brown_hole.png");
    } else if ((solidColor === "Brown") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_brown.png");
    } else if ((solidColor === "Yellow") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_yellow_hole.png");
    } else if ((solidColor === "Yellow") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_yellow.png");
    } else if ((solidColor === "Silver") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_silver_hole.png");
    } else if ((solidColor === "Silver") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_silver.png");
    } else if ((solidColor === "Cyan") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_cyan_hole.png");
    } else if ((solidColor === "Cyan") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_cyan.png");
    } else if ((solidColor === "Green") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_green_hole.png");
    } else if ((solidColor === "Green") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_green.png");
    } else if ((solidColor === "Red") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_red_hole.png");
    } else if ((solidColor === "Red") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_red.png");
    } else if ((solidColor === "Gold") && (holeOrNo === 'yes')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_gold_hole.png");
    } else if ((solidColor === "Gold") && (holeOrNo === 'no')) {
      $("#cover_solid_image").attr("src", "img/cover_solid_gold.png");
    }
  }

  // Show and hide image with hole for 1 and 4 color cover options

  $("#4_color_cover_hole").on("change", function() {
    var oneOrFour = $( "input[name=cover_color_radios]:checked" ).val();
    if (($('#4_color_cover_hole').is(':checked')) && (oneOrFour === "Four Color")) {
      $("#4color_hole_image").attr("src", "img/cover_4color_hole.png");
    } else if (($('#4_color_cover_hole').is(":not(:checked)")) && (oneOrFour === "Four Color")) {
      $("#4color_hole_image").attr("src", "img/cover_4color.png");
    } else if (($('#4_color_cover_hole').is(':checked')) && (oneOrFour === "One Color")) {
      $("#1color_hole_image").attr("src", "img/cover_1color_hole.png");
    } else if (($('#4_color_cover_hole').is(":not(:checked)")) && (oneOrFour === "One Color")) {
      $("#1color_hole_image").attr("src", "img/cover_1color.png");
    }
  });

  // hide final delivery fields

  $("#delivery_checkbox").on("change", function() {
    if ($('#delivery_address_checkbox').is(':checked')) {
      $("#final_delivery_wrap").addClass('final_delivery_wrap_off');
      $("input[name='final_delivery_company']").prop('disabled', true);
      $("input[name='final_delivery_contact_person']").prop('disabled', true);
      $("input[name='final_delivery_phone_number']").prop('disabled', true);
      $("input[name='final_delivery_street_address']").prop('disabled', true);
      $("input[name='final_delivery_city']").prop('disabled', true);
      $("input[name='final_delivery_postal_code']").prop('disabled', true);
      $("input[name='final_delivery_country']").prop('disabled', true);
    } else {
      $("#final_delivery_wrap").removeClass('final_delivery_wrap_off');
      $("input[name='final_delivery_company']").prop('disabled', false);
      $("input[name='final_delivery_contact_person']").prop('disabled', false);
      $("input[name='final_delivery_phone_number']").prop('disabled', false);
      $("input[name='final_delivery_street_address']").prop('disabled', false);
      $("input[name='final_delivery_city']").prop('disabled', false);
      $("input[name='final_delivery_postal_code']").prop('disabled', false);
      $("input[name='final_delivery_country']").prop('disabled', false);
    }
  });

  // CHECK DATA and then SEND TO PHP

  $("#manmade-intake-form").submit(function(e) {
    e.preventDefault();
    $('#ajax-progress').show();
    var formData = {};

    // Contact Information Variables
    formData.company = $('input[name="company"]').val();
    formData.mobile_number = $('input[name="mobile_number"]').val();
    formData.name = $('input[name="name"]').val();
    formData.street_address = $('input[name="street_address"]').val();
    formData.tax_id = $('input[name="tax_id"]').val();
    formData.email = $('input[name="email"]').val();
    formData.city = $('input[name="city"]').val();
    formData.postal_code = $('input[name="postal_code"]').val();
    formData.country = $('input[name="country"]').val();

    // Mastering and Cutting Order Variables
    formData.project_artist = $('input[name="project_artist"]').val();
    formData.release_title = $('input[name="release_title"]').val();
    formData.preferred_engineer = $('input[name="preferred_engineer"]').val();
    formData.catalogue_number = $('input[name="catalogue_number"]').val();
      // Attendance
      if ($('input:radio[name="attendance"]').is(":checked")) {
        if (document.getElementById('attend_yes').checked) {
          formData.attendance = "yes";
        } else {
          formData.attendance = "no";
        }
      } else {
        formData.attendance = "";
      }
    formData.engraving_side_a = $('input[name="engraving_side_a"]').val();
    formData.engraving_side_b = $('input[name="engraving_side_b"]').val();
    formData.vinyl_positions = $('textarea[name="vinyl_positions"]').val();
    formData.vinyl_positions = formData.vinyl_positions.replace(/\n/g, "<br />");
    formData.pressing_plant = $('input[name="pressing_plant"]').val();
    formData.contact_person = $('input[name="contact_person"]').val();
    // Release Formats
      var formatsArray = [];
      $('#release_formats input:checked').each(function() {
        formatsArray.push($(this).val());
      });
      var release_formats;
      release_formats = formatsArray.join(', ');
      formData.release_formats = release_formats;
    // Vinyl Diameter Formats
      var diameterArray = [];
      $('#vinyl_diameter_formats input:checked').each(function() {
        diameterArray.push($(this).val());
      });
      var vinyl_diameter_formats = diameterArray.join(', ');
      formData.vinyl_diameter_formats = vinyl_diameter_formats;
    
    // Vinyl Manufactoring Variables
      // Vinyl Sizes
      var vinylSizesArray = [];
      $('#man_vinyl_sizes input:checked').each(function() {
        vinylSizesArray.push($(this).val());
      });
      var manufacturing_vinyl_size = vinylSizesArray.join((', '));
      formData.manufacturing_vinyl_size = manufacturing_vinyl_size;
      formData.amount_of_vinyl = $('input[name="amount_of_vinyl"]').val();

      // 12inch options

      if (manufacturing_vinyl_size.match(/12inch/g)) {
        if (document.getElementById('vinyl_size_12_triple').checked) {
          formData.amount_of_12inch = "triple";
        } else if (document.getElementById('vinyl_size_12_double').checked) {
          formData.amount_of_12inch = "double";
        } else {
          formData.amount_of_12inch = "single";
        } 
        if (document.getElementById('140G_vinyl').checked) {
          formData.vinyl_weight_12inch = "140G";
        } else  {
          formData.vinyl_weight_12inch = "180G";
        }
      } else {
        formData.amount_of_12inch = "";
        formData.vinyl_weight_12inch = "";
      }

      // Vinyl Color

      if ($('input[name="transparent"]').is(":checked")) {
        formData.vinyl_color = "transparent";
      } else {
        $('#vinyl_color_radios input[type=radio]:checked').each(function(index, color) {
          formData.vinyl_color = color.value
        });
      }

      // Labels
      if ($('input:radio[name="label_color_radios"]').is(":checked")) {
        $('#label_radios input[type=radio]:checked').each(function(index, label) {
          formData.label = label.value;
        });
      } else {
        formData.label = "";
      }

      formData.amount_of_bw_labels = $('input[name="amount_of_bw_labels"]').val();
      formData.amount_of_cmyk_labels = $('input[name="amount_of_cmyk_labels"]').val();

      // Sleeves
      if ($('input:radio[name="sleeves_color_radios"]').is(":checked")) {
        $('#sleeve_radios input[type=radio]:checked').each(function(index, color) {
          if (color.value === "Lined Paper Sleeve") {
            formData.sleeve = color.value;
            formData.color_of_sleeve = $('#lined_paper_sleeve_color option:selected').val();
            formData.type_of_sleeve = "";
          } else if (color.value === "Polylined Sleeve") {
              formData.sleeve = color.value;
              formData.color_of_sleeve = $('#polylined_sleeve_color option:selected').val();
              formData.type_of_sleeve = "";
          } else if (color.value === "Four Color") {
              formData.sleeve = color.value;
              formData.color_of_sleeve = "";
              formData.type_of_sleeve = $('#type_of_sleeve_4_color option:selected').val();
          } else {
              formData.sleeve = "";
              formData.color_of_sleeve = "";
              formData.type_of_sleeve = "";
          }
        });
      } else {
        formData.sleeve = "";
        formData.color_of_sleeve = "";
        formData.type_of_sleeve = "";
      }

      formData.amount_of_lined_paper_sleeves = $('input[name="amount_of_paper_lined_sleeves"]').val();
      formData.amount_of_polylined_sleeves = $('input[name="amount_of_polylined_sleeves"]').val();
      formData.amount_of_4_color_sleeves = $('input[name="amount_of_4_color_sleeves"]').val();

      // Covers

      if ($('input:radio[name="cover_color_radios"]').is(":checked")) {
        $('#cover_radios input[type=radio]:checked').each(function(index, cover) {
          if (cover.value === "Disco Bag") {
            formData.cover = cover.value;
            formData.cover_option = $('#color_of_disco_bag option:selected').val();
            formData.cover_finish = "";
            formData.cover_hole = "";
          } else if (cover.value === "Solid Color") {
            formData.cover = cover.value;
            formData.cover_option = $('#solid_color_cover option:selected').val();
            formData.cover_finish = $('#finish_of_solid_color_cover option:selected').val();
            if ($('input:checkbox[name="solid_color_cover_hole"]').is(":checked")) {
              formData.cover_hole = "with hole";
            } else {
              formData.cover_hole = "no hole";
            }
          } else if (cover.value === "One Color") {
            formData.cover = cover.value;
            formData.cover_finish = $('#finish_of_4_color_cover option:selected').val();
            formData.cover_option = $('#thickness_of_4_color_cover option:selected').val();
            if ($('input:checkbox[name="4_color_cover_hole"]').is(":checked")) {
              formData.cover_hole = "with hole";
            } else {
              formData.cover_hole = "no hole";
            }
          } else if (cover.value === "Four Color") {
            formData.cover = cover.value;
            formData.cover_finish = $('#finish_of_4_color_cover option:selected').val();
            formData.cover_option = $('#thickness_of_4_color_cover option:selected').val();
            if ($('input:checkbox[name="4_color_cover_hole"]').is(":checked")) {
              formData.cover_hole = "with hole";
            } else {
              formData.cover_hole = "no hole";
            }
          } else {
            formData.cover = "";
            formData.cover_option = "";
            formData.cover_hole = "";
            formData.cover_finish = "";
          }
        });
      } else {
        formData.cover = "";
        formData.cover_option = "";
        formData.cover_hole = "";
        formData.cover_finish = "";
      }
      formData.amount_of_disco_solid_covers = $('input[name="amount_of_disco_solid_covers"]').val();
      formData.amount_of_cmyk_covers = $('input[name="amount_of_cmyk_covers"]').val();

      // Test Pressings

      formData.test_pressing_amount = $('input[name="test_pressing_amount"]').val();

      // Test Pressing Delivery Address

      formData.test_delivery_company = $('input[name="test_delivery_company"]').val();
      formData.test_delivery_contact_person = $('input[name="test_delivery_contact_person"]').val();
      formData.test_delivery_phone_number = $('input[name="test_delivery_phone_number"]').val();
      formData.test_delivery_street_address = $('input[name="test_delivery_street_address"]').val();
      formData.test_delivery_city = $('input[name="test_delivery_city"]').val();
      formData.test_delivery_postal_code = $('input[name="test_delivery_postal_code"]').val();
      formData.test_delivery_country = $('input[name="test_delivery_country"]').val();

      // Final Product Delivery Address
      formData.final_delivery_company = $('input[name="final_delivery_company"]').val();
      formData.final_delivery_contact_person = $('input[name="final_delivery_contact_person"]').val();
      formData.final_delivery_phone_number = $('input[name="final_delivery_phone_number"]').val();
      formData.final_delivery_street_address = $('input[name="final_delivery_street_address"]').val();
      formData.final_delivery_city = $('input[name="final_delivery_city"]').val();
      formData.final_delivery_postal_code = $('input[name="final_delivery_postal_code"]').val();
      formData.final_delivery_country = $('input[name="final_delivery_country"]').val();

      // Final Delivery Checkbox

      if ($('input:checkbox[name="delivery_address_checkbox"]').is(":checked")) {
        formData.delivery_address_checkbox = 'yes';
      } else {
        formData.delivery_address_checkbox = 'no';
      }
     
      // Notes

      formData.notes = $('textarea[name="additional_notes"]').val();
      formData.notes = formData.notes.replace(/\n/g, "<br />");

      // GDPR

      if ($('input:checkbox[name="gdpr_consent"]').is(":checked")) {
        formData.gdpr = "has been checked";
      } else {
        formData.gdpr = "has not been checked";
      }

    $.ajax({
      type: "POST",
      url: "sendgrid/sendmail.php",
      data: formData,
      success: function(data) {
         setTimeout(function() {
            $("#ajax-progress").hide();
            $("#form_success_message").show();
            $("#manmade-intake-form")[0].reset();
          }, 500);
        },
      error: function() {
          setTimeout(function() {
            $("#ajax-progress").hide();
            $("#form_error_message").show();
            $("#manmade-intake-form")[0].reset();
          }, 500);
        },
    });
  });

  // clear success and error messages if user fills out the form again

  $('#company_input').focus(function() {
    $("#ajax-progress").hide();
    $("#form_success_message").hide();
    $("#form_error_message").hide();
  });


})(jQuery);