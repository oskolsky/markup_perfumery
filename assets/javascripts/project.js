//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

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
  // .. YTPlayer init
  //
  $(".movie").mb_YTPlayer();
  



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



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
$(window).load(function() {});