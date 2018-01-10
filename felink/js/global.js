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

    $(".title-bar").click(function(){
        $('body').animate({'scrollTop':'0'},300);
    });
    $(document).foundation();
});