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