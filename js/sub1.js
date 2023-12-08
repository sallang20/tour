$(function () {
  // scroll
  // scroll
  // scroll
  let baseline = -330;

  const con1 = $("#con1").offset().top + baseline;
  const con2 = $("#con2").offset().top + baseline;
  const ul1 = $("#con2 ul:nth-of-type(1)").offset().top + baseline;
  const ul2 = $("#con2 ul:nth-of-type(2)").offset().top + baseline;
  const ul3 = $("#con2 ul:nth-of-type(2)").offset().top;

  const footer = $("footer").offset().top + baseline;
  console.log("con2위치:" + con2);
  console.log("ul1위치:" + ul1);
  console.log("ul2위치:" + ul2);
  console.log("ul3위치:" + ul3);

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
      $("#con1 .con1box").addClass("on");
      $("#con1 .arr").addClass("on");
    }
    if (scroll >= con2 && scroll < footer) {
      $("#con2 .con_title").addClass("on");
      $("#con2 .img div").addClass("on");
    }
    if (scroll >= ul1 && scroll < ul2) {
      $("#con2 ul:nth-of-type(1)").addClass("on");
    }
    if (scroll >= ul2 && scroll < ul3) {
      $("#con2 ul:nth-of-type(2)").addClass("on");
    }
    if (scroll >= ul3 && scroll < footer) {
      $("#con2 ul:nth-of-type(3)").addClass("on");
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

  // con1 슬라이드
  // con1 슬라이드
  // con1 슬라이드

  let i1 = 0;
  let total1 = $(".slide11 li").length;

  // 앞으로 슬라이드
  function start() {
    i1++;
    $(".navi div").removeClass("on");
    if (i1 == total1 - 1) {
      $(".slide11 ul")
        .stop()
        .animate({ marginLeft: "-500%" }, function () {
          $(".slide11 ul").css({ marginLeft: "0" });
        });
      $(".slide12 ul")
        .stop()
        .animate({ marginLeft: "-500%" }, function () {
          $(".slide12 ul").css({ marginLeft: "0" });
        });

      $(".slide13 ul")
        .stop()
        .animate({ marginLeft: "-500%" }, function () {
          $(".slide13 ul").css({ marginLeft: "0" });
        });

      i1 = 0;
      $(".point p").removeClass("on");
      $(".point p").eq(i1).addClass("on");
      $(".navi div").eq(i1).addClass("on");
      $(".text1").removeClass("on");
      $(".text1").eq(i1).addClass("on");
    } else {
      $(".slide11 ul")
        .stop()
        .animate({ marginLeft: `${-i1 * 100}%` });
      $(".slide12 ul")
        .stop()
        .animate({ marginLeft: `${-i1 * 100}%` });

      $(".slide13 ul")
        .stop()
        .animate({ marginLeft: `${-i1 * 100}%` });
      $(".navi div").eq(i1).addClass("on");
      $(".point p").removeClass("on");
      $(".point p").eq(i1).addClass("on");
      $(".text1").removeClass("on");
      $(".text1").eq(i1).addClass("on");
    }
  }

  // 다음 버튼
  $(".next").click(function () {
    start();
  });

  // 뒤로 슬라이드
  function back() {
    i1--;
    $(".navi div").removeClass("on");
    if (i1 < 0) {
      $(".slide1 ul").css({ marginLeft: "-500%" });
      $(".slide1 ul").stop().animate({ marginLeft: "-400%" });
      i1 = 4;
      $(".navi div").eq(i1).addClass("on");
      $(".point p").removeClass("on");
      $(".point p").eq(i1).addClass("on");
      $(".text1").removeClass("on");
      $(".text1").eq(i1).addClass("on");
    } else {
      $(".slide1 ul")
        .stop()
        .animate({ marginLeft: `${-i1 * 100}%` });
      $(".navi div").eq(i1).addClass("on");
      $(".point p").removeClass("on");
      $(".point p").eq(i1).addClass("on");
      $(".text1").removeClass("on");
      $(".text1").eq(i1).addClass("on");
    }
  }
  // 이전 버튼
  $(".prev").click(function () {
    back();
  });
  // 네비 버튼

  $(".navi div").click(function () {
    i1 = $(this).index();
    //console.log(i);
    $(".navi div").removeClass("on");
    $(this).addClass("on");

    $(".slide1 ul")
      .stop()
      .animate({ marginLeft: `${-i1 * 100}%` });
    $(".point p").removeClass("on");
    $(".point p").eq(i1).addClass("on");
    $(".text1").removeClass("on");
    $(".text1").eq(i1).addClass("on");
  });
});
