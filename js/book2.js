async function fetchBooks2(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 50
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

// 이 책 어떰요
async function howBookData() {
    try {
        const data = await fetchBooks2('소설');

        for (let j = 0; j < Math.min(50, data.documents.length); j++) {
            const book= data.documents[j];

            const boxHTML = `
                <div class="howBox">
                    <div class="how-imgBox"><img src="${book.thumbnail}"></div>
                    <p>${book.title}</p>
                    <h6>${Number(book.price).toLocaleString()}원</h6>
                </div>
            `;

            $('.howWrap').append(boxHTML);
            $('#filter > option').eq(j+1).text(book.title);
        }
    } catch (error) {
        console.log('에러발생(이 책 어떰요)', error);
    }
}
howBookData();