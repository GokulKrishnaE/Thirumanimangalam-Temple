$(document).ready(function(){
    
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })
  $('[data-bs-toggle="tooltip"]').tooltip()


  $('#eventsslider').slick({
    dots: false,
    autoPlay:true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: "<button class='slick-arrow-button left-arrow'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button class='slick-arrow-button right-arrow'><i class='fas fa-chevron-right'></i></button>",   
  });
  new Swiper('.hero-image-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: false
  });
  new Swiper('#committee-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  $('.match-height').matchHeight()

  $('.navbar-toggler').click(function(){
    $('body').toggleClass('overflow-hidden')
  })

})


$(document).ajaxStop(function(){
  $('.match-height').matchHeight()
  $('.card-content .card-top').matchHeight()
  $('[data-bs-toggle="tooltip"]').tooltip()

  $('.navbar-toggler').click(function(){
    $('.mobileMenuOverlay').toggleClass('active')
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       $('header').addClass('header-sticky');
       $('.scrollDownAnimate').removeClass('visible')
    } else {
       $('header').removeClass('header-sticky');
       $('.scrollDownAnimate').addClass('visible')
    }
    if ($(this).scrollTop() > 600) {
       $('.fixedWhatsapp,.footerFixedMenu').addClass('active');
    } else {
      $('.fixedWhatsapp,.footerFixedMenu').removeClass('active');
    }
 });

 $('#scrollToTop').click(function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600); // 600ms for smooth scroll
  return false;
});

$('.card-title').matchHeight()

$('#clients-slider').slick({
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 300,
  // cssEase: 'linear',
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  // swipeToSlide: true,
  // centerMode: true,
  // focusOnSelect: true,
  dots: false,
  arrows: true,
  prevArrow: '<button class="prevArrow"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="nextArrow"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
          ]
});


const sections = document.querySelectorAll('.section');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const sectionTitle = entry.target.querySelector('.section-title');
      if (entry.isIntersecting) {
        sectionTitle.classList.add('visible');
      } else {
        sectionTitle.classList.remove('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  navigation()

    
})

function navigation(){
  const currentUrl= window.location.pathname.split('/').pop()
  $('.navbar-nav li a').removeClass('active')
  $('.navbar-nav li').each(function(){
    if($(this).hasClass('dropdown')){
      $(this).find('ul li').each(function(){
        if($(this).find('a').attr('href') === currentUrl){
          $(this).parents('li').find('.nav-link').addClass('active')
        }
      })
    }
    if($(this).find('.nav-link').attr('href') === currentUrl){
      $(this).find('.nav-link').addClass('active')
    }
  })

}