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

    $(".link_item a").mouseover(function() {
        $(".link_item a").removeClass("animated bounce")
        $(this).addClass("animated bounce");
    })

});