// 서브메뉴
$(function () {
    $('.nav li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
});
$(function () {
    $('.nav li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });
});

// 언어 서브메뉴
$(function () {
    $('.lan li').click(function () {
        $(this).children('.lan_sub').stop().toggle();
    });
});

AOS.init({
    duration: 1200 //aos 나타나는 속도
})

// 탑버튼
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top_b').fadeIn();
    } else {
        $('.top_b').fadeOut();
    }
});

$('.top_b').click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );