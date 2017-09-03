$(document).ready(function() {
    $(".link").click(function() {
        var i = $(this).index();
        $("html, body").animate({
            scrollTop: $(".link_item").eq(i).offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(".link_item .item").mouseover(function() {
        $(this).addClass("animated bounce").siblings().removeClass("animated bounce");
    });
});