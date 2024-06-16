$(document).ready(function () {
  $(window).scroll(function () {
    const $navbar = $("#myNavbar");
    const $barimage = $(".barimage");
    const $navbaritems = $navbar.find(".navbar-item");
    const scrollTop = $(this).scrollTop();
    const main_contain = document.getElementById("main_contain");
    const isScrolledDown = scrollTop > 130;

    $navbar.toggleClass("flex-column", !isScrolledDown);
    $navbar.toggleClass(
      "fixed-top justify-content-between bg-dark",
      isScrolledDown
    );

    if (isScrolledDown) {
      $barimage.attr("src", "asset/image/barimage_f.png");
      $barimage.css({ height: "50px", width: "50px" });
      $navbaritems.addClass("link-light").removeClass("link-dark");
      main_contain.style.marginTop = "30vh";
    } else {
      $barimage.attr("src", "asset/image/barimage.png");
      $barimage.css({ height: "100px", width: "100px" });
      $navbaritems.removeClass("link-light").addClass("link-dark");
      main_contain.style.marginTop = "0";
    }
  });
});
