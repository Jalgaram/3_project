$('.inner-menu ul li').eq(0).css({
     'font-weight': '500',
        'border-bottom': '2px solid black'
});

$('.inner-menu ul li').click(function () {
    const index = $(this).index();

    $('.inner-menu ul li').css({
        'font-weight': '',
        'border-bottom': ''
    });

    $(this).css({
        'font-weight': '500',
        'border-bottom': '2px solid black'
    });

    $('.inner-menu1, .inner-menu2, .inner-menu3, .inner-menu4').hide();
    $('.inner-menu' + (index + 1)).show();
});

// 제품상세 등등등
$(function () {
    $.get("./txt/sub.txt", function (data) {
        $('.inner-menu1').html(data);
    })

    $.get("./txt/sub2.txt", function (data) {
        $('.inner-menu2').html(data);
    })

});