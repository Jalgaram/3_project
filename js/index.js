// 글씨 에니메이션1
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

const newTitle1 = document.querySelector('.new-book h3');
observer1.observe(newTitle1);

// 글씨 에니메이션2
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

const newTitle2 = document.querySelector('.best-book h3');
observer2.observe(newTitle2);

// 글씨 에니메이션3
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

const newTitle3 = document.querySelector('.hot-book h3');
observer3.observe(newTitle3);

// 글씨 에니메이션4
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

const newTitle4 = document.querySelector('.how-book h3');
observer4.observe(newTitle4);

// 글씨 에니메이션5
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

const newTitle5 = document.querySelector('.your-book h3');
observer5.observe(newTitle5);

const pElem1 = document.querySelector('.your-book p');
observer5.observe(pElem1);

// 글씨 에니메이션6
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5,
});

const newTitle6 = document.querySelector('.project-ban h3');
observer6.observe(newTitle6);

const pElem2 = document.querySelector('.project-ban p');
observer6.observe(pElem2);

//메뉴바 고정
const mainMenu = document.querySelector('.main-menu');
const logo = document.querySelector('.main-nav1 ul img[alt="인디펍"]')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        mainMenu.classList.add('fixed');
    } else {
        mainMenu.classList.remove('fixed');
    }
});

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

function goToDetailPage(){
   window.location.href = 'sub.html';
}

// 신착 도서 슬라이더
newprev = () => {
  $('.new-wrapper .new-slide:last').prependTo('.new-wrapper');
  $('.new-wrapper').css('margin-left', -318);
  $('.new-wrapper').stop().animate({ marginLeft: 0 }, 800);
}

newnext = () => {
  $('.new-wrapper').stop().animate({ marginLeft: -318 }, 800, () => {
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


// 프로젝트 슬라이더
var projectSwiper = new Swiper(".projectSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".projectSwiper-button-next",
    prevEl: ".projectSwiper-button-prev",
  },
  pagination: {
    el: ".projectSwiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
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