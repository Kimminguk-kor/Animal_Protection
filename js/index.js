$(function () {
  $(".banner").slick({
    dots: true,
  });

  $(".hamBox").click(function () {
    if ($("#nav").css("display") == "none") {
      $("#nav").show(); //display :none 일떄
    } else {
      $("#nav").hide(); //display :block 일떄
    }
  });
  $(window).resize(function () {
    if (window.innerWidth > 1280) {
      $("#nav").css("display", "block");
    } else if (window.innerWidth < 1280) {
      $("#nav").css("display", "none");
    }
  });

  let adoptShowBanner = 0;

  let liWidth = $(".cardBox01>.card").width();

  let liCount = $(".cardBox01>.card").length;

  let objLast = $(".cardBox01>.card:last").clone();
  let objFirst = $(".cardBox01>.card:lt(4)").clone();

  $(".cardBox01").prepend(objLast);
  $(".cardBox01").append(objFirst);
  $(".cardBox01>.card")
    .eq(adoptShowBanner + 2)
    .addClass("active");

  let count = $(".cardBox01>.card").length;

  $(".cardBox01").width(count * liWidth);
  $(".cardBox01>.card").width(liWidth);

  function moveBanner() {
    $(".cardBox01")
      .stop()
      .animate({
        left: -adoptShowBanner * liWidth,
      });
    $(".cardBox01>.card")
      .eq(adoptShowBanner + 2)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  $(".arrowRight").on("click", function () {
    if (adoptShowBanner == liCount) {
      adoptShowBanner = 0;
      $(".cardBox01").css("left", 0);
    }
    adoptShowBanner++;
    moveBanner();
  });
  $(".arrowLeft").on("click", function () {
    if (adoptShowBanner == 0) {
      adoptShowBanner = liCount;
      $(".cardBox01").css("left", -liCount * liWidth);
    }
    adoptShowBanner--;
    moveBanner();
  });

  let findShowBanner = 0;

  let liWidthFind = $(".cardBox02>.card").width();

  let liCountFind = $(".cardBox02>.card").length;

  let objLastFind = $(".cardBox02>.card:last").clone();
  let objFirstFind = $(".cardBox02>.card:lt(4)").clone();

  $(".cardBox02").prepend(objLastFind);
  $(".cardBox02").append(objFirstFind);
  $(".cardBox02>.card")
    .eq(findShowBanner + 2)
    .addClass("active");

  let countFind = $(".cardBox02>.card").length;

  $(".cardBox02").width(countFind * liWidthFind);
  $(".cardBox02>.card").width(liWidthFind);

  function moveBannerFind() {
    $(".cardBox02")
      .stop()
      .animate({
        left: -findShowBanner * liWidthFind,
      });
    $(".cardBox02>.card")
      .eq(findShowBanner + 2)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  $(".arrowRight02").on("click", function () {
    if (findShowBanner == liCountFind) {
      findShowBanner = 0;
      $(".cardBox02").css("left", 0);
    }
    findShowBanner++;
    moveBannerFind();
  });
  $(".arrowLeft02").on("click", function () {
    if (findShowBanner == 0) {
      findShowBanner = liCountFind;
      $(".cardBox02").css("left", -liCountFind * liWidthFind);
    }
    findShowBanner--;
    moveBannerFind();
  });
});
