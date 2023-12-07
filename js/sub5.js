$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -330;
  let baseline1 = -400;

  const con1 = $("#con1").offset().top + baseline1;
  const con2 = $("#con2").offset().top + baseline;

  const footer = $("footer").offset().top + baseline;
  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= con1 && scroll < con2) {
      $("#con1 .text").addClass("on");
      $("#con1 .image").addClass("on");
    }
    if (scroll >= con2 && scroll < footer) {
      $("#con2 .con_title").addClass("on");
      $("#con2 table").addClass("on");
      $("#con2 div:last-child").addClass("on");
    }
  });

  //burger
  //burger
  //burger
  $(".burger").on("click", function () {
    $(".burgerslide").stop().addClass("on");
  });
  $(".slideclose").on("click", function () {
    $(".burgerslide").stop().removeClass("on");
  });
  $(".burger").on("click", function () {
    $(".burgerslide1").stop().addClass("on");
  });
  $(".slideclose").on("click", function () {
    $(".burgerslide1").stop().removeClass("on");
  });
});
