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

// 서브 디테일 북
async function detailBookData() {
    try {
        const querys = ['전지적 푸바오 시점: 아이러푸 에디션'];

        for (let i = 0; i < querys.length; i++) {
            const data = await fetchBooks(querys[i]);

            for (let j = 0; j < Math.min(2, data.documents.length); j++) {

                const boxHTML = `
                     <div class= "detail_font">
                        <h3>${data.documents[j].title}</h3>
                        <span>
                            <i class="fi fi-sr-star"></i>
                            <i class="fi fi-sr-star"></i>
                            <i class="fi fi-sr-star"></i>
                            <i class="fi fi-sr-star"></i>
                            <i class="fi fi-sr-star"></i> (0건)

                            <i class="fi fi-rs-heart"></i>
                            <i class="fi fi-rs-share"></i>
                        </span>
                        <hr>

                        <table>
                            <tr>
                                <th>정가</th>
                                <td>${Number(data.documents[j].price).toLocaleString()}원</td>
                            </tr>

                            <tr>
                                <th><h4>판매가</h4></th>
                                <td><h4>${Number(data.documents[j].sale_price).toLocaleString()}원</h4></td>
                            </tr>

                            <tr>
                                <th>배송방법</th>
                                <td>택배</td>
                            </tr>

                            <tr>
                                <th>배송비</th>
                                <td>3,000원 (50,000원 이상 구매 시 무료)</td>
                            </tr>
                        </table>

                        <table class="total">
                            <tr>
                                <td>${data.documents[j].title}</td>
                                <td>
                                    <span>
                                        <i class="fi fi-rs-minus-small"></i>
                                        <input type="text" value= "1">
                                        <i class= "fi fi-rs-plus-small"></i>
                                    </span>
                                </td>
                                <td><h4>${Number(data.documents[j].sale_price).toLocaleString()}원</h4></td>
                            </tr>
                        </table>

                        <div class= "dm">
                            <span class="dmpan1"><i class="fi fi-ts-shipping-fast"></i></span>
                            <p>
                                <b>내일 출발하게요!<br></b>
                                오늘출발 <span class="dmpan2">14:00</span> 마감
                            </p>
                        </div>

                        <div class="dm2">
                            <p>무이자 할부 <span>|</span> 카드 자세히 보기 <i class="fi fi-rs-interrogation"></i></p>
                        </div>

                        <div class="dm3">
                            <p>총 상품금액 <span>${Number(data.documents[j].sale_price).toLocaleString()}원</span><span class="dm3span"> (1개)</span></p>
                        </div>

                        <div class="dmBtn">
                            <button class="dmBtn1">
                                <i class="fi fi-bs-shopping-cart"></i> 장바구니
                            </button>

                            <button class="dmBtn2">
                                <i class="fi fi-rr-check"></i> 바로 구매
                            </button>
                        </div>
                     </div>
                `;

                $('.detail').eq(j).append(boxHTML);

            }
        }
    } catch (error) {
        console.log('에러발생(서브 디테일)', error);
    }
}
detailBookData();

$(document).on('click', '.fi-rs-minus-small', function(){
    const $input = $(this).siblings('input');
    let count = parseInt($input.val());

    if(count > 1){
        count--;
        $input.val(count);
        updateTotal($(this).closest('.detail_font'), count);
    }
});

$(document).on('click', '.fi-rs-plus-small', function(){
    const $input = $(this).siblings('input');
    let count = parseInt($input.val());
    
    count++;
    $input.val(count);
    updateTotal($(this).closest('.detail_font'), count);
});

function updateTotal($context, count){
    const unitPrice = parseInt(
        $context.find('table:not(.total) h4').text().replace(/[^0-9]/g, '')
    );
        const totalPrice = unitPrice * count;

        $context.find('.total h4').text(`${totalPrice.toLocaleString()}원`);
        $context.find('.dm3 span').first().text(`${totalPrice.toLocaleString()}원`);
        $context.find('.dm3span').text(`(${count}개)`);
}

// 회전
const box = document.querySelector('.hoverBox');

box.addEventListener('click', () => {
    box.classList.toggle('rotate');
});

// 하트 클릭시 변하기
$(document).on('click', '.fi-rs-heart', function(){
    $(this)
        .removeClass('fi-rs-heart')
        .addClass('fi-ss-heart');
});