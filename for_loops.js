$(document).ready(function () {
    ejercicios_for_loops();
});

const ejercicios_for_loops = () => {

  // Ejercicio 1
  $("#fl_e1b").hide();
  $("#fl_e1").click(function (e) {
    e.preventDefault();
    $("#fl_e1b").show();
  });
  $("#fl_demo_e1").click(function (e) {
    e.preventDefault();
    let i;
    for (i = 0; i < 10; i++) {
      console.log(i);
    }
  });

  // Ejercicio 2
  $("#fl_e2b").hide();
  $("#fl_e2").click(function (e) {
    e.preventDefault();
    $("#fl_e2b").show();
  });
  $("#fl_demo_e2").click(function (e) {
    e.preventDefault();
    let fruits = ["Mazana", "Banana", "Naranja"];
    for (x of fruits) {
      console.log(x);
    }
  });
};
