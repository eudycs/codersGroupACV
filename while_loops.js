$(document).ready(function () {
  ejercicios_while_loops();
});

const ejercicios_while_loops = () => {
  // Ejercicio 1
  $("#wl_e1b").hide();
  $("#wl_e1").click(function (e) {
    e.preventDefault();
    $("#wl_e1b").show();
  });
  $("#wl_demo_e1").click(function (e) {
    e.preventDefault();
    let i = 0;
    while (i < 10) {
      console.log(i);
      i = i++;
    }
  });

  // Ejercicio 2
  $("#wl_e2b").hide();
  $("#wl_e2").click(function (e) {
    e.preventDefault();
    $("#wl_e2b").show();
  });
  $("#wl_demo_e2").click(function (e) {
    e.preventDefault();
    let i = 0;
    while (i < 10) {
      console.log(i);
      i = i + 2;
    }
  });
};
