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

        for (let j = 0; j < Math.min(28, data.documents.length); j++) {
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
        const slidesPerPage = 7;
        const slideWidth = 160 + 20;
        const pageWidth = slidesPerPage * slideWidth;
        let currentPage = 0;

        const totalSlide = $('.suggest-slide').length;
        const totalPage = Math.ceil(totalSlide / slidesPerPage);

        $('.suggest-wrapper').css({
            width: `${slideWidth * totalSlide}px`
        });

        $('.suggest-prevBox').click(() => {
            if(currentPage > 0){
                currentPage--;
                $('.suggest-wrapper').stop().animate({
                    marginLeft: `-${pageWidth * currentPage}px`
                }, 800);
            }
        });

        $('.suggest-nextBox').click(() => {
            if(currentPage < totalPage -1){
                currentPage++;
                $('.suggest-wrapper').stop().animate({
                    marginLeft: `-${pageWidth * currentPage}px`
                }, 800);
            }
        });

    } catch (error) {
        console.log('에러발생(구매 많이 된 상품)', error);
    }
}
suggestBookData();


