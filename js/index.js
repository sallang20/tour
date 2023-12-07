$(function () {
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

  // visual
  // visual
  // visual

  let total = $(".vis_back li").length;
  let i = 0;
  let timer;

  start();
  //자동반복
  function start() {
    timer = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
      fade();
    }, 4000);
  }

  //내비버튼
  $(".navi div").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    if (i !== true) {
      fade();
      start();
    }
  });

  $(".navi div").eq(0).addClass("on");
  $(".vis_title").eq(0).addClass("on");
  function fade() {
    $(".vis_back li").fadeOut();
    $(".vis_back li").eq(i).fadeIn();
    $(".navi div").removeClass("on");
    $(".navi div").eq(i).addClass("on");
    $(".vis_title").fadeOut("fast");
    $(".vis_title").eq(i).fadeIn("on");
    $(".num span").text("0" + (i + 1));
  }

  // con3
  // con3
  // con3

  let total3 = $("#con3 ul li").length;
  let i3 = 0;
  let timer3;

  start3();
  //자동반복
  function start3() {
    timer3 = setInterval(function () {
      if (i3 == total3 - 1) {
        i3 = 0;
      } else {
        i3++;
      }
      fade3();
    }, 3000);
  }

  //다음버튼

  $("#con3 .next").on("click", function () {
    clearInterval(timer3);
    if (i3 == total3 - 1) {
      i3 = 0;
    } else {
      i3++;
    }
    fade3();
    start3();
  });

  //이전버튼
  $("#con3 .prev").on("click", function () {
    clearInterval(timer3);
    if (i3 == 0) {
      i3 = total3 - 1;
    } else {
      i3--;
    }
    fade3();
    start3();
  });

  function fade3() {
    $("#con3 ul li").fadeOut("slow");
    $("#con3 ul li").eq(i3).fadeIn("slow");

    $(".btn .num1").text("0" + (i3 + 1));
  }

  // con4
  // con4
  // con4

  for (let i4 = 0; i4 < 4; i4++) {
    $(`.more4_${i4}`).on("click", function () {
      $(`.modal${i4}`).addClass("on");
    });
  }
  $(".close").on("click", function () {
    $(".modal").removeClass("on");
  });

  // scroll
  // scroll
  // scroll
  let baseline = -330;

  $(window).on("scroll", function () {
    let con1 = $("#con1").offset().top + baseline;
    let con2 = $("#con2").offset().top + baseline;
    let con3 = $("#con3").offset().top + baseline;
    let con4 = $("#con4").offset().top + baseline;
    let con5 = $("#con5").offset().top + baseline;

    // console.log(con1);
    let scroll = $(this).scrollTop();

    if (scroll >= con1 && scroll < con2) {
      $("#con1 .con_title").addClass("on");
      $("#con1 .con1box").addClass("on");
    } else if (scroll >= con2 && scroll < con3) {
      $(".ti_box").addClass("on");
      $("#con2 .con_title").addClass("on");
    } else if (scroll >= con4 && scroll < con5) {
      $("#con4 .con_title").addClass("on");
      $(".ins li").addClass("on");
    }
  });
});
// con1 슬라이드
// con1 슬라이드
// con1 슬라이드

let i1 = 0;
let total1 = $(".slide li").length;

// 자동넘김
let timer1 = setInterval(start, 3000);

// 앞으로 슬라이드
function start() {
  i1++;
  $(".con1navi div").removeClass("on");
  if (i1 == total1 - 1) {
    $(".slide")
      .stop()
      .animate({ marginLeft: "-500%" }, function () {
        $(".slide").css({ marginLeft: "0" });
      });
    i1 = 0;
    $(".con1navi div").eq(i1).addClass("on");
    $(".textall .text").fadeOut("fast");
    $(".textall .text").eq(i1).fadeIn();
    $(".textall1 .text").fadeOut("fast");
    $(".textall1 .text").eq(i1).fadeIn();
  } else {
    $(".slide")
      .stop()
      .animate({ marginLeft: `${-i1 * 100}%` });
    $(".con1navi div").eq(i1).addClass("on");
    $(".textall .text").fadeOut("fast");
    $(".textall .text").eq(i1).fadeIn();
    $(".textall1 .text").fadeOut("fast");
    $(".textall1 .text").eq(i1).fadeIn();
  }
}
// 다음 버튼
$(".next").click(function () {
  clearInterval(timer1);
  start();
  timer1 = setInterval(start, 3000);
});

// 뒤로 슬라이드
function back() {
  i1--;
  $(".con1navi div").removeClass("on");
  if (i1 < 0) {
    $(".slide").css({ marginLeft: "-500%" });
    $(".slide").stop().animate({ marginLeft: "-400%" });
    i1 = 4;
    $(".con1navi div").eq(i1).addClass("on");
    $(".textall .text").fadeOut("fast");
    $(".textall .text").eq(i1).fadeIn();
    $(".textall1 .text").fadeOut("fast");
    $(".textall1 .text").eq(i1).fadeIn();
  } else {
    $(".slide")
      .stop()
      .animate({ marginLeft: `${-i1 * 100}%` });
    $(".con1navi div").eq(i1).addClass("on");
    $(".textall .text").fadeOut("fast");
    $(".textall .text").eq(i1).fadeIn();
    $(".textall1 .text").fadeOut("fast");
    $(".textall1 .text").eq(i1).fadeIn();
  }
}
// 이전 버튼
$(".prev").click(function () {
  clearInterval(timer1);
  back();
  timer1 = setInterval(start, 3000);
});
// 네비 버튼

$(".con1navi div").click(function () {
  clearInterval(timer1);
  i1 = $(this).index();
  //console.log(i);
  $(".con1navi div").removeClass("on");
  $(this).addClass("on");

  $(".slide")
    .stop()
    .animate({ marginLeft: `${-i1 * 100}%` });
  timer1 = setInterval(start, 3000);
  $(".textall .text").fadeOut("fast");
  $(".textall .text").eq(i1).fadeIn();
  $(".textall1 .text").fadeOut("fast");
  $(".textall1 .text").eq(i1).fadeIn();
});
