async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "미움받을 용기"
    });

    try{
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
            method: "GET",
            headers:{
                Authorization: "KakaoAK ed660f124a21c301ee1dffe2b9063941"
            }
        });

        if(!response.ok){
            throw new Error(`HTTP 오류! 상태 코드: $(response.status)`);
        }

        const data = await response.json();

        $('.bestBox').append('img src=' + data.documents[0].thumbnail + '>');
        $('.bestBox').append('<p>' + data.documents[0].title + '</p>');
        $('.bestBox').append('<p>' + data.documents[0].authors + '</p>');

    } catch(error){
        console.log('에러발생', error);
    }
}
