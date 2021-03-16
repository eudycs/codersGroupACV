$(document).ready(function () {
  ejercicios_comparisons();
});

const ejercicios_comparisons = () => {
  // Ejercicio 1
  $("#comp_e1b").hide();
  $("#comp_e1").click(function (e) {
    e.preventDefault();
    $("#comp_e1b").show();
  });
  $("#comp_demo_e1").click(function (e) {
    e.preventDefault();
    let x = 10;
    let y = 5;
    alert(x > y);
  });

  // Ejercicio 2
  $("#comp_e2b").hide();
  $("#comp_e2").click(function (e) {
    e.preventDefault();
    $("#comp_e2b").show();
  });
  $("#comp_demo_e2").click(function (e) {
    e.preventDefault();
    let x = 10;
    let y = 10;
    alert(x == y);
  });

  // Ejercicio 3
  $("#comp_e3b").hide();
  $("#comp_e3").click(function (e) {
    e.preventDefault();
    $("#comp_e3b").show();
  });
  $("#comp_demo_e3").click(function (e) {
    e.preventDefault();
    let x = 10;
    let y = 5;
    alert(x != y);
  });

  // Ejercicio 4
  $("#comp_e4b").hide();
  $("#comp_e4").click(function (e) {
    e.preventDefault();
    $("#comp_e4b").show();
  });
  $("#comp_demo_e4").click(function (e) {
    e.preventDefault();
    let age = $("#comp_n_e4").val();
    let voteable = (age < 18) ? "Demasiado Joven" : "Suficientemente Mayor"
    alert(voteable);
  });
};
