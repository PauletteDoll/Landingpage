// Validación de formulario

$(document).ready(function () {
  // Validación de campos obligatorios
  $("input[required]").each(function () {
    $(this).on("blur", function () {
      if ($(this).val() === "") {
        $(this).parent().addClass("has-error");
      } else {
        $(this).parent().removeClass("has-error");
      }
    });
  });

  // Validación de contraseña
  $("input[name='contraseña']").on("blur", function () {
    if ($(this).val().length < 8) {
      $(this).parent().addClass("has-error");
    } else {
      $(this).parent().removeClass("has-error");
    }
  });

  // Validación de checkbox
  $("input[name='terminos']").on("click", function () {
    if ($(this).is(":checked")) {
      $("#registrarse").removeAttr("disabled");
    } else {
      $("#registrarse").attr("disabled", "disabled");
    }
  });
});
