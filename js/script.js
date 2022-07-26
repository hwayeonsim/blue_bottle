$(document).ready(function () {

  // swiper-1
  var swiper = new Swiper(".first", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // swiper-2
  let ww = $(window).width();
  layout1();

  function layout1() {
    if (ww > 760) {

      var swiper = new Swiper(".second", {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 55,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    } else if (ww <= 760){

      var swiper = new Swiper(".second", {
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 55,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    }
  }

  //리사이즈시 자동호출
  $(window).resize(function () {
    ww = $(window).width();
    layout1();
    layout2();
  });


  //AOS
  AOS.init();


  // 메뉴버튼
  $('.menu-btn').click(function () {
    $(this).toggleClass('active');
    $('.menu-bar-box').toggleClass('active');
  });

  // 탑버튼
  $('.top-btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });




  //   배경이미지 전환
  $('.cafe a').mouseenter(function () {
    let changeImage = $(this).parent('.cafe').attr('data-image');
    $('.bg-image').css({
      'background-image': `url(${changeImage})`
    });
  });
  $('.cafe a').mouseleave(function () {
    $('.bg-image').css({
      'background-image': ''
    });
  });




});