async function fetchBooks2(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 100
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK ed660f124a21c301ee1dffe2b9063941"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

// 구매 많이 된 상품
async function suggestBookData() {
    try {
        const data = await fetchBooks2('에세이');

        for (let j = 0; j < Math.min(29, data.documents.length); j++) {
            const book = data.documents[j];

            const boxHTML = `
                <div class="suggest-slide">
                    <div class="suggest-imgBox">
                        <img src="${book.thumbnail}">
                    </div>
                    
                    <p>${book.title}</p>
                    <h6>${Number(book.price).toLocaleString()}원</h6>
                </div>
            `;

            $('.suggest-wrapper').append(boxHTML);
            $('#filter > option').eq(j + 1).text(book.title);
        }

        // 슬라이드
        $('.suggest-prevBox').click(() => {
            $('.suggest-wrapper .suggest-slide:last').prependTo('.suggest-wrapper');
            $('.suggest-wrapper').css('margin-legt', -1260);
            $('.suggest-wrapper').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.suggest-nextBox').click(() => {
            $('.suggest-wrapper').stop().animate({ marginLeft: -1250 }, 800, function (){
                $('.suggest-wrapper .suggest-slide:first').appendTo('.suggest-wrapper');
            $('.suggest-wrapper').css({ marginLeft: 0 });
            }); 
        });
    } catch (error) {
        console.log('에러발생(구매 많이 된 상품)', error);
    }
}
suggestBookData();


