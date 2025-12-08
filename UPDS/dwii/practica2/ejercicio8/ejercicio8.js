
$("#crear").click(() => {
  $("#contenedor").html(`
    <form id="formUsuario">
      <label>Nombre de usuario:</label>
      <input type="text" name="usuario"><br><br>
      <label>Clave:</label>
      <input type="password" name="clave"><br><br>
    </form>
  `);

  $("#resultado").html(""); // limpiar resultados anteriores
});

$("#mostrar").click(() => {
  let html = "";

  $("#formUsuario")
    .find("*")
    .each(function () {
      html += $("<div>").text(this.outerHTML).html() + "<br>";
    });

  $("#resultado").html(html);
});
