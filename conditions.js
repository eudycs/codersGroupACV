$(document).ready(function () {
  ejercicios_conditions();
});

const ejercicios_conditions = () => {
  // Ejercicio 1
  $("#cond_e1b").hide();
  $("#cond_e1").click(function (e) {
    e.preventDefault();
    $("#cond_e1b").show();
  });
  $("#cond_demo_e1").click(function (e) {
    e.preventDefault();
    let x = $("#cond_x_e1").val();
    let y = $("#cond_y_e1").val();
    if (x > y) {
      alert("Hola Mundo");
    }
  });

  // Ejercicio 2
  $("#cond_e2b").hide();
  $("#cond_e2").click(function (e) {
    e.preventDefault();
    $("#cond_e2b").show();
  });
  $("#cond_demo_e2").click(function (e) {
    e.preventDefault();
    let x = $("#cond_x_e2").val();
    let y = $("#cond_y_e2").val();
    if (x > y) {
      alert("Hola Mundo");
    } else {
      alert("Adios");
    }
  });
};
