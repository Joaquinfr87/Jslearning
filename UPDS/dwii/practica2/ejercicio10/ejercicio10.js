$("#texto").on("input", function () {
  let max = $(this).attr("maxlength");
  let usados = $(this).val().length;
  $("#restantes").text(max - usados);
});
