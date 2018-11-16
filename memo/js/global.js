$(document).ready(function () {

    $(".link").click(function () {
        var i = $(this).index();
        $("html, body").animate({
            scrollTop: $(".link-item").eq(i).offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        $(".link-item").eq(i).addClass('active').siblings().removeClass('active');
        return false;
    });

    $(".go-top").click(function () {
        $("html, body").animate({
            'scrollTop': '0'
        }, 300);
    });

    $(window).scroll(function () {
        $('.go-top').addClass('off-inner');
        var $this = $('.title-bar-right p');
        $this.hide();
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
            $this.hide();
        } else {
            $this.show();
        }
    });

    function checkScroll() {
        var m1 = 0,
            m2 = 0,
            timer = null,
            that = this;
        document.onscroll = function () {
            clearTimeout(that.timer) // 每次滚动前 清除一次
            that.timer = setTimeout(function () {
                that.m2 = $(window).scrollTop();
                if (that.m2 == that.m1) {
                    $('.go-top').removeClass('off-inner');
                }
            }, 700);
            that.m1 = $(window).scrollTop();
        }
    }
    checkScroll();

    var grid = new Minigrid({
        container: '.link-list',
        item: '.link-item',
        gutter: 12
    });
    grid.mount();
    window.addEventListener('resize', grid.mount());
    $(window).resize(function () {
        grid.mount();
    });

    $(document).foundation();
});
