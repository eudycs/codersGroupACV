$(document).ready(function () {
  ejercicios_switch();
});

const ejercicios_switch = () => {
  // Ejercicio 1
  $("#sw_e1b").hide();
  $("#sw_e1").click(function (e) {
    e.preventDefault();
    $("#sw_e1b").show();
  });
  $("#sw_demo_e1").click(function (e) {
    e.preventDefault();
    let fruits = $("#sw_frutas_e1").val();
    switch (fruits) {
      case "Banana":
        alert("Hola");
        break;
      case "Manzana":
        alert("Bienvenido");
        break;
    }
  });

  // Ejercicio 2
  $("#sw_e2b").hide();
  $("#sw_e2").click(function (e) {
    e.preventDefault();
    $("#sw_e2b").show();
  });
  $("#sw_demo_e2").click(function (e) {
    e.preventDefault();
    let fruits = $("#sw_frutas_e2").val();
    switch (fruits) {
      case "Banana":
        alert("Hola");
        break;
      case "Manzana":
        alert("Bienvenido");
        break;
      default:
        alert("Ninguna");
    }
  });
};
