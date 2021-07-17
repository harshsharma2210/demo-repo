// Page loading animation
$(window).on("load", function () {
  if ($(".cover").length) {
    $(".cover").parallax({
      imageSrc: $(".cover").data("image"),
      zIndex: "1",
    });
  }
  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );
});
