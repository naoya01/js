$(function () {
  $(".menu-trigger").on("click", function (event) {
    $(this).toggleClass("active");
    $("#sp-menu").fadeToggle();
    event.preventDefault();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() < 300) {
      // topBtn.fadeIn();
      $(".menu-trigger").addClass("active");
    } else {
      $(".menu-trigger").removeClass("active");
    }
    return false;
  });
});
