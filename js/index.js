// 슬라이더
var swiper = new Swiper(".swiper-slideWrap", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
  if (index === swiper.activeIndex) {
    slide.classList.add('active');
  }
});

swiper.on('slideChangeTransitionEnd', () => {
  document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    if (index === swiper.activeIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
});

// 신착 도서 슬라이더
newprev = () => {
  $('.new-wrapper .new-slide:last').prependTo('.new-wrapper');
  $('.new-wrapper').css('margin-left', -318);
  $('.new-wrapper').stop().animate({marginLeft: 0}, 800);
}

newnext = () => {
   $('.new-wrapper').stop().animate({marginLeft: -318}, 800, () => {
    $('.new-wrapper .new-slide:first').appendTo('.new-wrapper');
    $('.new-wrapper').css({ marginLeft: 0 });
   });
}

setInterval(newnext, 6000);

$('.new-prev').click(function () {
  newprev();
});
$('.new-next').click(function () {
  newnext();
});

// 공지사항 슬라이더
function prev() {
  $('.notice-slide-wrap li:last').prependTo('.notice-slide-wrap');
  $('.notice-slide-wrap').css('margin-left', -842);
  $('.notice-slide-wrap').stop().animate({ marginLeft: 0 }, 800);
}

function next() {
  $('.notice-slide-wrap').stop().animate({ marginLeft: -842 }, 800, function () {
    $('.notice-slide-wrap li:first').appendTo('.notice-slide-wrap');
    $('.notice-slide-wrap').css({ marginLeft: 0 });
  });
}

setInterval(next, 4000);

$('.notice-prev').click(function () {
  prev();
});

$('.notice-next').click(function () {
  next();
});

//구매안전서비스
document.getElementById('payments').addEventListener('click', function (e) {
  e.preventDefault();

  window.open(
    'https://consumer.tosspayments.com/escrow/detail?mertid=CF_indiepubdea',
    '구매안전서비스 | 토스페이먼츠',
    'width=540px,height=700px'
  )
});