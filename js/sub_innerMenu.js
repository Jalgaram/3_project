// 상세페이지
$(function (){
    $.get("./txt/sub.txt", function(data){
        $('.inner-menu1').html(data);
    })
});