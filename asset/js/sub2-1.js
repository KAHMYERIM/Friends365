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

// lan 서브메뉴
$(function () {
    $('.lan li').click(function () {
        $(this).children('.lan_sub').stop().toggle();
    });
});

// category02 서브메뉴
$(function () {
    $('.category2 li').click(function () {
        $(this).children('.category2_sub').stop().toggle();
    });
});

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