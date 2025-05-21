const reviews = [
// 1
    {
        img:"img/리뷰1.jpeg",
        text1:"이 책을 아주 많이 사랑할 것 같은 예감이 들어요 처음엔 책 디자인이 마음에 들어서 궁금했는데 내용도 너무 만 족 .... ...",
        user:"네*******",
        date:"2025.04.19",
        bookImg: "img/리뷰1책.png",
        bookTitle: "우정 이상 사랑 초과- 강릉 여행 서간집",
        count: 1,
        score: `100.0`
    },
 //2 
    {
        img:"img/리뷰2.webp",
        text1:"한 대학생의 우여곡절을 볼 수 있어서 좋습니다. 보통 대학을 혼자 다니다보면 대학생의 일생을 알게 되는 건 술자리에서 말고는 힘들잖아요. 아니, 술자리에서 듣기 힘들 수도 있죠. 저같은 경우 대학교를 다니며 다른 학생과 교류를 잘 하지 않는 스타일인데, 마치 수업 듣는 사람 중 한 번도 이야기를 나눠보지 못한 사람의 일대기를 알게 된 것 같아서 흥미로웠습니다. 학교 생활을 정말 잘 하는 것처럼 보이는 사람도 충분히 힘든 겪고 있겠구나..싶어서 위로도 되구요. 그래서 일기장일까요? 또는 자서전 같은 느낌도 받았습니다. 앞으로도 많은 대학생 분들의 이야기를 많이 풀어주셨으면 하는 바람입니다!",
        user:"3*******",
        date:"2025.04.10",
        bookImg: "img/리뷰2책.jpg",
        bookTitle: "내 일기장 펼치면 바보!",
        count: 1,
        score: `100.0`
    },
// 3
    {
        img:"img/리뷰3.jpeg",
        text1:"평소 사진찍기를 좋아하는 저에게 잘 맞을 것 같아 구매했어요제 딸 아이에게도 읽으라고 권유하고 싶네요",
        user:"네*******",
        date:"2025.03.28",
        bookImg: "img/리뷰3책.jpg",
        bookTitle: "시선이 머무는 순간들",
        count: 1,
        score: `100.0`
    },
// 4
    {
        img:"img/리뷰4.jpg",
        text1:"마음을 울리는 솔직한 학교폭력 경험담이 와닿았어요. 과거의 기억들을 떠올리고 알게 모르게 가해자로, 방관자로 살았던 때를 반성하는 시간을 가질 수 있었습니다.",
        user:"네*******",
        date:"2025.03.22",
        bookImg: "img/리뷰4책.png",
        bookTitle: "아무도 내게 괜찮냐고 묻지 않았지만",
        count: 1,
        score: `100.0`
    },
// 5
    {
        img:"img/리뷰5.jpeg",
        text1:"따뜻한 색감과 그림이 마음까지 위로해주네요~결국 나를 일으키는 힘은 내 안에 있다는 메세지가 오랜 여운이 남는 동화책입니다!",
        user:"네*******",
        date:"2025.03.17",
        bookImg: "img/리뷰5책.jpg",
        bookTitle: "오늘도 나는",
        count: 2,
        score: `100.0`
    },
// 6
    {
        img:"img/리뷰6.jpg",
        text1:"봄이 옵니다. 이 시기에 읽기 좋은 책 <br>...",
        user:"네*******",
        date:"2025.03.15",
        bookImg: "img/리뷰6책.jpg",
        bookTitle: "땅과 씨앗이 필요해",
        count: 1,
        score: `100.0`
    },
 //7
    {
        img:"img/리뷰7.jpeg",
        text1:"인스타 광고에 떠서 알게 되었는데표지에 이끌려 구매하게 되었어요배송 빠르게 와서 좋았어요잘 읽겠습니다~~",
        user:"네*******",
        date:"2025.03.12",
        bookImg: "img/리뷰7책.jpg",
        bookTitle: "낭만을 팝니다.",
        count: 1,
        score: `100.0`
    },
//8
    {
        img:"img/리뷰8.jpg",
        text1:"읽기 전에 비둘기를 좋아하는 지인을 위해 선물용으로 한권을 더 샀어요 혐오의 대상으로 치부된 대상의, 미처 생각하지 못한 사정을 알게 된 느낌이에요. 비둘기만이 아니라, 오해받는 세상 모든 이들의 이야기가 이렇겠죠. 지지가 행복했으면 혹은 행복했었으면 좋겠어요.좋은 책 감사합니다 작가님!",
        user:"네*******",
        date:"2025.03.02",
        bookImg: "img/리뷰8책.jpg",
        bookTitle: "지지",
        count: 1,
        score: `100.0`
    },
//9
    {
        img:"img/리뷰9.jpg",
        text1:"비닐 커버까지 짱짱하네요. 시간이 지났는데도 구매할수 있어 좋습니다.",
        user:"네*******",
        date:"2025.02.12",
        bookImg: "img/리뷰9책.jpg",
        bookTitle: "계간 어린이와 문학(2023 겨울)",
        count: 2,
        score: `100.0`
    },
//10 
    {
        img:"img/리뷰10.jpg",
        text1:"빠른 배송!담백하면서도 술술 읽히는 글!훈작가만의 감성!",
        user:"네*******",
        date:"2025.01.10",
        bookImg: "img/리뷰10책.jpg",
        bookTitle: "고 이즈 러브",
        count: 2,
        score: `100.0`
    },
//11
    {
        img:"img/리뷰11.jpg",
        text1:".인디펍에서 서포터즈로서 도서를 무상으로 제공받아, 작성한 리뷰입니다.'<br>첫사랑 때문에 제주에 갔었어",
        user:"장**",
        date:"2024.12.26",
        bookImg: "img/리뷰11책.jpg",
        bookTitle: "(리뷰어스)첫사랑 때문에 제주에 갔었어",
        count: 1,
        score: `100.0`
    },
//12
    {
        img:"img/리뷰12.jpeg",
        text1:"영화를 좋아하시는 분, 그리고 광주 영화가 궁금하신 분들께 추천합니다.",
        user:"카*******",
        date:"2024.12.19",
        bookImg: "img/리뷰12책.jpg",
        bookTitle: "광주 영화인 열전",
        count: 1,
        score: `100.0`
    },
//13
    {
        img:"img/리뷰13.jpg",
        text1:"잔잔한 울림이 있는 책입니다.평온하게 울려퍼지는 글과 그림에 영혼마저도 편안해지네요. 부담없이 편하게 읽을수 있으면서도 하나님과의 관계를 깊이있게 고민해 볼 수 있는 좋은 시간이었습니다. 스치는 기억처럼 보이는 그림에 나의 일상과 주변을 한번 더 돌아보게 됩니다. 추천합니다!",
        user:"네*******",
        date:"2024.12.15",
        bookImg: "img/리뷰13책.png",
        bookTitle: "서재가 있는 정원",
        count: 2,
        score: `100.0`
    },
//14
    {
        img:"img/리뷰14.jpg",
        text1:"저도 산책 좋아해요 같이 가요~~ <br>...",
        user:"네*******",
        date:"2024.12.15",
        bookImg: "img/리뷰14책.jpg",
        bookTitle: "산책집",
        count: 1,
        score: `100.0`
    },
//15
    {
        img:"img/리뷰15.jpg",
        text1:"글도 깔끔하니 좋고. 사진도 좋아요 <br>...",
        user:"네*******",
        date:"2024.11.27",
        bookImg: "img/리뷰15책.jpg",
        bookTitle: "보통의 유럽여행",
        count: 3,
        score: `100.0`
    },
];

const list = document.getElementById('reviewSlide');

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

reviews.forEach(r => {
    const li = document.createElement("li");

    li.innerHTML = `
        <div>
             <img src="${r.img}" alt="리뷰">
             <div class="review-box">
                <p class="review-text1">${r.text1}</p>
                <p class="review-text2">
                    <span class="star">
                        <i class="fi fi-sr-star"></i>
                        <i class="fi fi-sr-star"></i>
                        <i class="fi fi-sr-star"></i>
                        <i class="fi fi-sr-star"></i>
                        <i class="fi fi-sr-star"></i>
                    </span>
                    ${r.user} ${r.date} 
                </p>

                <hr>

                <div class="review-book">
                    <img src="${r.bookImg}">

                    <div class="review-text-wrap">
                        <h5>${truncateText(r.bookTitle, 17)}</h5>

                        <p>
                            리뷰<span>${r.count}</span>
                            평점<span>${r.score}</span>
                        </p>
                    </div>
                </div>
             </div>
        </div>
    `;

    list.appendChild(li);
});

// 리뷰 자동 슬라이드
function reviewPrev() {
    $('.review-slide li:last').prependTo('.review-slide');
    $('.review-slide').css('margin-left', -256);
    $('.review-slide').stop().animate({ marginLeft: 0 }, 800);
  }
  
  function reviewNext() {
    $('.review-slide').stop().animate({ marginLeft: -256 }, 800, function () {
      $('.review-slide li:first').appendTo('.review-slide');
      $('.review-slide').css({ marginLeft: 0 });
    });
  }
  
  setInterval(reviewNext, 3000);


//   리뷰 제어버튼
  $('.review-prev').click(function(){
    reviewPrev();
  });
  
  $('.review-next').click(function(){
    reviewNext();
  });
