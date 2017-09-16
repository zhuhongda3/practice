$(document).ready(function() {
    $(".link").click(function() {
        var i = $(this).index();
        $("html, body").animate({
            scrollTop: $(".link-item").eq(i).offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    $(".accordion-menu li").click(function(){
        $(".off-canvas").hide();
        $(".js-off-canvas-overlay").css("visibility","hidden");
    });

    $(".footer").click(function(){
        $('body').animate({'scrollTop':'0'},300);
    });

    $(".link-item .item").mouseover(function() {
        $(this).addClass("animated bounce").siblings().removeClass("animated bounce");
    });

    $(document).foundation();
});