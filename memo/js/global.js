$(document).ready(function() {
  $(".link-item")
    .eq(0)
    .show()
    .siblings()
    .hide();
  $(".link,.menu-con li").click(function() {
    var i = $(this).index();
    // $("html, body").animate({
    //     scrollTop: $(".link-item").eq(i).offset().top
    // }, {
    //     duration: 500,
    //     easing: "swing"
    // });
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".link-item")
      .eq(i)
      .show()
      .siblings()
      .hide();
    return false;
  });

  $(".go-top").click(function() {
    $(".link-list").animate(
      {
        scrollTop: "0"
      },
      300
    );
  });

  $(".link-list").scroll(function() {
    var $this = $('.go-top');
    var scrollTop = $(".link-list").scrollTop();
    if (scrollTop > 200) {
      $this.show();
    } else {
      $this.hide();
    }
  });

  // var grid = new Minigrid({
  //     container: '.link-list',
  //     item: '.link-item',
  //     gutter: 12
  // });
  // grid.mount();
  // window.addEventListener('resize', grid.mount());
  // $(window).resize(function () {
  //     grid.mount();
  // });

  $(document).foundation();
});
