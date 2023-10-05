window.onscroll = function () {
  var botonAncla = document.getElementById("anclaBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.body.classList.add("anclado");
  } else {
    document.body.classList.remove("anclado");
  }
};
