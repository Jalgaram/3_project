async function fetchBooks(query) {
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

// 베스트
async function bestBookData() {
    try {
        const querys = [
            '나루토',
            '하이큐',
            '주술회전',
            '체인소맨'
        ];

        for (let i = 0; i < querys.length; i++) {
            const data = await fetchBooks(querys[i]);

            for (let j = 0; j < Math.min(5, data.documents.length); j++) {

                const boxHTML = `
                    <div class="bestBox">
                        <div class="best-imgBox">
                            <img src="${data.documents[j].thumbnail}">

                            <div class = "heartBox">
                                <span><img src= "img/하트.png"></span>
                                <span><img src= "img/장바구니.png"></span>
                            </div>
                        </div>

                        <p>${data.documents[j].title}</p>
                        <h6>${Number(data.documents[j].price).toLocaleString()}원</h6>
                    </div>
                `;

                $('.bestWrap').eq(j).append(boxHTML);
            }
        }
    } catch (error) {
        console.log('에러발생(베스트)', error);
    }
}
bestBookData();

// 화제의 책
async function hotBookData() {
    try {
        const querys = ['개 마음 다이어리', '강아지책', '내 완변학 강아지를 소개합니다', '말리와 나', '개와 고양이 그리고 나라는 인간', '한때 우리의 전부였던:밀레니얼 키즈의 향수', '내가 너에게 다가가는 시간', '우리는 모두 아름답게 사라지는 거야', '겨울의 작은 집'];

        for (let i = 0; i < querys.length; i++) {
            const data = await fetchBooks(querys[i]);

            for (let j = 0; j < Math.min(9, data.documents.length); j++) {

                const boxHTML = `
                    <div class="hotBox">
                        <div class="hot-imgBox">
                            <img src = "${data.documents[j].thumbnail}">

                             <div class = "heartBox">
                                <span><img src= "img/하트.png"></span>
                                <span><img src= "img/장바구니.png"></span>
                            </div>
                        </div>
                        <p>${data.documents[j].title}</p>
                        <h6>${Number(data.documents[j].price).toLocaleString()}원</h6>
                    </div>
                `;

                $('.hotWrap').eq(j).append(boxHTML);

            }
        }
    } catch (error) {
        console.log('에러발생(화제의 책)', error);
    }
}
hotBookData();
