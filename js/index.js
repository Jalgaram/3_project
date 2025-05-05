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
  
  $('.notice-prev').click(function(){
    prev();
  });
  
  $('.notice-next').click(function(){
    next();
  });

//구매안전서비스
document.getElementById('payments').addEventListener('click', function(e){
    e.preventDefault();

    window.open(
        'https://consumer.tosspayments.com/escrow/detail?mertid=CF_indiepubdea',
        '구매안전서비스 | 토스페이먼츠',
        'width=540px,height=700px,left=10px'
    )
});

// 리뷰
