$(document).ready(function () {
    ejercicios_break_loops();
});

const ejercicios_break_loops = () => {

  // Ejercicio 1
  $("#bl_e1b").hide();
  $("#bl_e1").click(function (e) {
    e.preventDefault();
    $("#bl_e1b").show();
  });
  $("#bl_demo_e1").click(function (e) {
    e.preventDefault();
    for (i = 0; i < 10; i++) {
      if (i == 5) {
        break;
      }
      console.log(i);
    }
  });

  // Ejercicio 2
  $("#bl_e2b").hide();
  $("#bl_e2").click(function (e) {
    e.preventDefault();
    $("#bl_e2b").show();
  });
  $("#bl_demo_e2").click(function (e) {
    e.preventDefault();
    for (i = 0; i < 10; i++) {
      if (i == 5) {
        continue;
      }
      console.log(i);
    }
  });
};
