// __________SIDEPANEL___________
$(document).ready(function() {
    setTimeout(function () {
    $('#loading').fadeToggle();
    },500);
    let t=0;  
    $(".intercom").on("click", function() {
        t = 1, $(".navPanel,.intercomCloseBtn").addClass("active"), $(".intercom").removeClass("active")
    })
    , $(".intercomCloseBtn").on("click", function() {
        t = 1, $(".navPanel,.intercomCloseBtn,.intercomFormBox.active").removeClass("active"), $(".intercom").addClass("active")
    })
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });
    $(window).on("scroll", function () {
      var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");
      if (bodyScroll > 200) {
        navbar.addClass("navroll");
      } else {
        navbar.removeClass("navroll");
      }
    });
    $(window).on('scroll', function() {
      $(".skill-progress .progres").each(function() {
          var bottom_of_object =
              $(this).offset().top + $(this).outerHeight();
          var bottom_of_window =
              $(window).scrollTop() + $(window).height();
          var myVal = $(this).attr('data-value');
          if (bottom_of_window > bottom_of_object) {
              $(this).css({
                  width: myVal
              });
          }
      });
  });
    var counted = 0;
    $(window).scroll(function(){ 
      if ($(this).scrollTop() > 200) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
      var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
      counted = 1;
    }
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
  $(".accordionion").on("click", ".title", function () {
    $(this).next().slideDown();
  
    $(".accordionion-info").not($(this).next()).slideUp();
  });
  
  $(".accordionion").on("click", ".item", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  
  $(".accordionionon").on("click", ".title", function () {
    $(this).next().slideDown();
  
    $(".accordionionon-info").not($(this).next()).slideUp();
  });
  
  $(".accordionionon").on("click", ".item", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  
    var swiper = new Swiper(".myclients", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter:true,
      },
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        440: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        729: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });  
  
    var swiper = new Swiper(".mytestimonial", {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      effect: "coverflow",
      coverflowEffect: {
          rotate: 0,
          depth: 800,
          slideShadows: true,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      breakpoints: {
        440: {
          slidesPerView: 1.5,
        },
        729: {
          slidesPerView: 2.3,
        },
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".mytestimonialpageup", {
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".mytestimonialpagedown", {
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 1500,
        reverseDirection: true,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".myblogs", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop:true,
      slidesPerView: "1",
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      breakpoints: {
        550: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });
  });
  
    