$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -330;

  const con1 = $("#con1").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const footer = $("footer").offset().top + baseline;
  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
      $("#con1 video").addClass("on");
      $("#con1 li").addClass("on");
    }
    if (scroll >= con2 && scroll < footer) {
      $("#con2 .con_title").addClass("on");
      $("#con2 .wrap2_1").addClass("on");
      $("#con2 .wrap2_2").addClass("on");
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

  //con1
  //con1
  //con1
  $(".drag .box").draggable({
    axis: "x", // x축으로만 드래그 가능하도록 설정
    containment: ".drag", // 드래그 범위 제한
  });

  //con2
  //con2
  //con2
  $("#con2 li").on("mouseenter", function () {
    $(this).stop().addClass("on");
  });
  $("#con2 li").on("mouseleave", function () {
    $(this).stop().removeClass("on");
  });
});
