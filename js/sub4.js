$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -330;

  const con1 = $("#con1").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const con3 = $("#con3").offset().top + baseline;

  const footer = $("footer").offset().top + baseline;
  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
      $("#con1 .navi").addClass("on");
      $("#con1 .all").addClass("on");
    }
    if (scroll >= con2 && scroll < con3) {
      $("#con2 .con_title").addClass("on");
      $("#con2 .in2> div:nth-of-type(1)").addClass("on");
      $("#con2 .in2> div:nth-of-type(3)").addClass("on");
      $("#con2 .line2").addClass("on");
    }

    if (scroll >= con3 && scroll < footer) {
      $("#con3 .con_title").addClass("on");
      $("#con3 ul").addClass("on");
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

  $("#con1 .navi a").on("click", function () {
    $("#con1 .navi a").stop().removeClass("on");
    $(this).stop().addClass("on");

    let i1 = $(this).index("#con1 .navi a");
    $("#con1 .all ul").stop().removeClass("on");
    $("#con1 .all ul").eq(i1).stop().addClass("on");
  });

  //con3
  //con3
  //con3
  $("#con3 ul li").on("click", function () {
    $("#con3 ul li").stop().removeClass("on");
    $(this).stop().addClass("on");

    let i1 = $(this).index("#con3 ul li");
    $("#con3 .text3").stop().removeClass("on");
    $("#con3 .text3").eq(i1).stop().addClass("on");
    $("#con3 .line3").stop().removeClass("on");
    $("#con3 .line3").eq(i1).stop().addClass("on");
  });
});
