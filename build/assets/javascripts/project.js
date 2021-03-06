//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. Register / login
  //
  $('.js-login').on('touchstart click', function() {
    var $login = $('.menu_i_dropdown.__login');
    
    $login.is(':hidden') ? $login.show() : $login.hide();
    return false;
  });

  $('.js-toggle').on('touchstart click', function() {
    var 
        $login    = $('.menu_i_dropdown.__login'),
        $register = $('.menu_i_dropdown.__register');

    if ($register.is(':hidden')) {
      $login.hide();
      $register.show();

    } else {
      $login.show();
      $register.hide();
    }
    
    
    return false;
  });

  //
  // .. YTPlayer init
  //
  $(".movie").mb_YTPlayer();

  //
  // .. jQuery Tabs init
  //  
  $('.tabs').tabs();

  //
  // .. jQuery Accordion init
  //  
  $('.accordion').accordion({
    collapsible: false,
    animate: false,
    heightStyle: 'content'
  });

  //
  // .. jQuery Progressbar init
  //  
  $('.progressbar').each(function() {
    $(this).progressbar({
      value: $(this).data('progress')
    });
  });

  //
  // .. OWL Carousel init
  //
  $('.carousel').each(function() {

    var 
      $carousel = $(this),
      $section  = $carousel.closest('.section'),
      $nav  = $section.find('.carousel-nav'),
      $prev = $nav.find('.carousel-nav_i.__prev'),
      $next = $nav.find('.carousel-nav_i.__next');

    $carousel.owlCarousel({
      responsive: false,
      items : $carousel.data('items')
    });

    $prev.on('touchstart click', function() {
      $carousel.trigger('owl.prev');
      return false;
    });

    $next.on('touchstart click', function() {
      $carousel.trigger('owl.next');
      return false;
    });

    var owl = $carousel.data('owlCarousel');
    
    if (owl.itemsAmount > $carousel.data('items')) {
      $section.on('mouseover', function() {
        $nav.css({visibility: 'visible'});
      });

      $section.on('mouseout', function() {
        $nav.css({visibility: 'hidden'});
      });
    }

  });

  //
  // .. OWL slider init
  //
  $('.slider').each(function() {

    var 
      $slider = $(this),
      $parent = $(this).parent(),
      $nav  = $parent.find('.slider-nav'),
      $prev = $nav.find('.slider-nav_i.__prev'),
      $next = $nav.find('.slider-nav_i.__next');
    
    $slider.owlCarousel({
      autoPlay: 5000,
      singleItem: true,
      pagination: true,
      transitionStyle: 'fadeUp'
    });

    $prev.on('touchstart click', function() {
      $slider.trigger('owl.prev');
      return false;
    });

    $next.on('touchstart click', function() {
      $slider.trigger('owl.next');
      return false;
    });

  });

  //
  // .. Cycle2 vertical carousel init
  //
  $('.vertical-carousel').each(function() {
    var _this = this;
    $(this).cycle({
      fx: 'carousel',
      timeout: 0,
      carouselVisible: 3,
      carouselVertical: true,
      swipe: true,
      prev: $(_this).siblings('.vertical-carousel-nav').find('.vertical-carousel-nav_i.__prev'),
      next: $(_this).siblings('.vertical-carousel-nav').find('.vertical-carousel-nav_i.__next')
    });
  });

  //
  // .. Stars raty
  // .. http://wbotelhos.com/raty/
  //
  $('.stars').raty({
    starOff: '/assets/images/star-off.png',
    starOn:  '/assets/images/star-on.png',
    width: 75
  });

  $('.stars.__readonly').raty({
    starOff: '/assets/images/star-off.png',
    starOn:  '/assets/images/star-on.png',
    width: 75,
    score: function() {
      return $(this).attr('data-score');
    },
    readOnly: true
  });

  //
  // .. Photo gallery
  //
  $('.photo-gallery').find('.photo-gallery_thumbs').find('img').on('click touchstart', function() {
    var src = $(this).data('src');
    $('.photo-gallery').find('.photo-gallery_preview').find('img').attr({src: src});
    return false;
  });

  //
  // .. Scroll pane init
  //
  $('.scroll-pane').jScrollPane();

  //
  // .. Switcher
  //
  $('.ui-switcher').find('.ui-switcher_i').on('click touchstart', function() {
    var $el  = $(this).find('.ico');
    var item = $(this).data('item');
    var checked = $(this).attr('data-checked');

    if (checked == 'false') {
      $el.removeClass('__' + item + '-muted');
      $el.addClass('__' + item);
      $(this).attr({'data-checked': 'true'});
    } else {
      $el.removeClass('__' + item);
      $el.addClass('__' + item + '-muted');
      $(this).attr({'data-checked': 'false'});
    }

    return false;
  });

  //
  // .. Checkbox pseudo links
  //
  $('.ui-checkbox-pseudo').on('click touchstart', function() {
    var checked = $(this).attr('data-checked');
    if (checked == 'false') { 
      $(this).attr({'data-checked': 'true'});
    } else {
      $(this).attr({'data-checked': 'false'});
    }
    return false;
  });



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {
    $('.menu_i_dropdown').hide();
  });



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {});
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {

  //
  // .. Resize to max height
  //
  $('[data-resize="height"]').resizeToMaxHeight();


  // $('[data-resize="height"]').each(function() {
  //   var parentClass = $(this).data('item');
  //   $(this).find('.' + itemClass).resizeToMaxHeight();
  // });

});