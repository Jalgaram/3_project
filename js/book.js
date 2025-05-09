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

    if(!response.ok){
        throw new Error(`HTTP 오류: $(response.status)`);
    }

    return response.json();
}

// 베스트
async function bestBookData(){
    try{
        const querys = ['다정한 건 오래 머무르고', '더 납작 엎드릴게요', '개와 고양이, 오래된 신문을 펼치다',  '마지막 산책이라니'];

        for(let i=0; i<querys.length; i++){
            const data = await fetchBooks(querys[i]);

            for(let j=0; j<Math.min(5, data.documents.length); j++){
                $('.bestWrap').eq(j).append('<div class= bestBox></div>');
                const bestDiv = $('.bestWrap').eq(j).find('.bestBox').last();
    
                bestDiv.append('<div class=best-imgBox><img src='+data.documents[j].thumbnail+'></div>');
                bestDiv.append('<p>'+data.documents[j].title+'</p>');
                bestDiv.append('<h6>'+Number(data.documents[j].price).toLocaleString()+'원</h6>');
            }
        }
    } catch (error){
        console.log('에러발생', error);
    }
}
bestBookData();
