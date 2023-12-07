$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -330;

  const con1 = $("#con1").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const con3 = $("#con3").offset().top + baseline;
  const con4 = $("#con4").offset().top + baseline;

  const footer = $("footer").offset().top + baseline;
  console.log("con2위치:" + con2);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
      $("#con1 ul").addClass("on");
    }
    if (scroll >= con2 && scroll < con3) {
      $("#con2 .con_title").addClass("on");
      $("#con2 .box2").addClass("on");
    }

    if (scroll >= con3 && scroll < con4) {
      $("#con3 .con_title").addClass("on");
      $("#con3 ul").addClass("on");
    }
    if (scroll >= con4 && scroll < footer) {
      $("#con4 .con_title").addClass("on");
      $("#con4 .leftbox4").addClass("on");
      $("#con4 li").addClass("on");
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
  $("#con1 li").on("click", function () {
    $("#con1 li").stop().removeClass("on");
    $(this).stop().addClass("on");

    let i1 = $(this).index();
    $("#con1 .text1").stop().removeClass("on");
    $("#con1 .text1").eq(i1).stop().addClass("on");
    $("#con1 .color1").stop().removeClass("on");
    $("#con1 .color1").eq(i1).stop().addClass("on");
  });

  //con2
  //con2
  //con2
  $("#con2 .close2").on("click", function () {
    $(this).stop().toggleClass("on");
    let i2 = $(this).index("#con2 .close2");
    $("#con2 .text2").eq(i2).stop().toggleClass("on");
  });
});
