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

// 메인배너
$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
        slidesPerView: 1.5,//보여지는 갤러리 수
        spaceBetween: 50,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 1500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        pagination: {//블릿 버튼
            el: '.gallery-center .swiper-pagination',
            clickable: true,
        },
    });
});

//  탭메뉴
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

//   탭메뉴 슬라이드
$(function () {
    var swiper = new Swiper('.gallery_inner ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 25,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        // autoplay: {
        //     delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        //     disableOnInteraction: false,
        // },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery .swiper-pagination',
            clickable: true,
        },

         
    });

   
});

// aos
AOS.init({
    duration: 1500 //aos 나타나는 속도
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