$(".link").hover(
  function () {
    $(this).css("background-color", "yellow");  // mouse entra
  },
  function () {
    $(this).css("background-color", "");        // mouse sale
  }
);
