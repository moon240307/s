$(document).ready(function () {
    $(document).scroll(() => {
        topGap = document.querySelector(".slogan").getBoundingClientRect().top;

        if (topGap <= 0) {
            $('.slogan').addClass("slogan_top")
        }
        else if (topGap > 0) {
            $('.slogan').removeClass("slogan_top");
        }
    });

    $("a").hover(
        function () {
            $(this).addClass("animated pulse infinite");
        },
        function () {
            $(this).removeClass("animated pulse infinite");
        }
    );

    $('.btn_download').addClass('animated pulse infinite')
    $('.btn_download').click(() => {
        $('.btn_download')
            .removeClass('pulse infinite').addClass('fadeOutBottomLeft')
        setTimeout(() => {
            $('.btn_download')
                .removeClass('fadeOutBottomLeft').addClass('pulse infinite')
        }, 1000)
    })

    $('.goTop').click(
        function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: 0, }, 1000);
        }
    );
    if (/iPad|iPhone/i.test(navigator.userAgent)) {
        $(".btn_download a").attr("onclick", "gopc()");
    } else {
        $(".btn_download a").attr("href", "https://www.xl3nru.xyz/vdg2mspv8zjmcw7e/EHW");
    }

});

function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
}
function copytext(textVar) {
    let textArea = document.createElement('textArea')
    textArea.value = textVar
    document.body.appendChild(textArea)
    if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
    } else {
        textArea.select();
    }
    document.execCommand('copy');
    document.body.removeChild(textArea);
    Swal.fire(
        {
            width: '220px',
            text: '已複製 ' + textVar,

        }
    );
}

function pcgame() {
    Swal.fire(

        {
            title: '模擬器下載中',
            text: 'PC玩家需在模擬器內執行遊戲',

        }
    );
}
function gopc() {
    Swal.fire(

        {
            title: '尚未支援蘋果系統',
            text: '請使用PC裝置下載遊戲',

        }
    );

}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    grabCursor: true,
    watchSlidesProgress: true,

    breakpoints: {


        // when window width is >= 640px
        768: {
            slidesPerView: 2.5,

        },
        1440: {
            slidesPerView: 3.5,
        },

    }
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    grabCursor: true,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    effect: "coverflow",
    loop: true,
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 9500,
    smartSpeed: 3000,

    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,

        slideShadows: true,


    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {


        // when window width is >= 640px
        768: {
            slidesPerView: 1.4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 1.5,
            spaceBetween: 80
        },
        1200: {
            slidesPerView: 1.6,
            spaceBetween: 100
        },
        1400: {
            slidesPerView: 1.7,
            spaceBetween: 120
        },

    }
});
var swiper4 = new Swiper(".mySwiper4", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 9500,
    smartSpeed: 3000,


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
