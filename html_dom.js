$(document).ready(function () {
  ejercicios_html_dom();
});

const ejercicios_html_dom = () => {

  // Ejercicio 1
  $("#html_dom_e1b").hide();
  $("#html_dom_e1").click(function (e) {
    e.preventDefault();
    $("#html_dom_e1b").show();
  });
  $("#demo_e1").click(function (e) {
    e.preventDefault();
    document.getElementById("demo_e1b").innerHTML = "Hola";
  });

  // Ejercicio 2
  $("#html_dom_e2b").hide();
  $("#html_dom_e2").click(function (e) {
    e.preventDefault();
    $("#html_dom_e2b").show();
  });
  $("#demo_e2").click(function (e) {
    e.preventDefault();
    document.getElementsByTagName("p")[1].innerHTML = "Hola";
  });

  // Ejercicio 3
  $("#html_dom_e3b").hide();
  $("#html_dom_e3").click(function (e) {
    e.preventDefault();
    $("#html_dom_e3b").show();
  });
  $("#demo_e3").click(function (e) {
    e.preventDefault();
    document.getElementsByClassName("demo_e3b")[0].innerHTML = "Hola";
  });

  // Ejercicio 4
  $("#html_dom_e4b").hide();
  $("#html_dom_e4").click(function (e) {
    e.preventDefault();
    $("#html_dom_e4b").show();
  });
  $("#demo_e4").click(function (e) {
    e.preventDefault();
    document.getElementById("demo_e4b").src = "./images/bin.ico";
  });

  // Ejercicio 5
  $("#html_dom_e5b").hide();
  $("#html_dom_e5").click(function (e) {
    e.preventDefault();
    $("#html_dom_e5b").show();
  });
  $("#demo_e5").click(function (e) {
    e.preventDefault();
    document.getElementById("demo_e5b").value = "Tenga un buen día!";
  });

  // Ejercicio 6
  $("#html_dom_e6b").hide();
  $("#html_dom_e6").click(function (e) {
    e.preventDefault();
    $("#html_dom_e6b").show();
  });
  $("#demo_e6").click(function (e) {
    e.preventDefault();
    document.getElementById("demo_e6b").style.color = "red";
  });

  // Ejercicio 7
  $("#html_dom_e7b").hide();
  $("#html_dom_e7").click(function (e) {
    e.preventDefault();
    $("#html_dom_e7b").show();
  });
  $("#demo_e7").click(function (e) {
    e.preventDefault();
    document.getElementById("demo_e7b").style.fontSize = "40px";
  });

  // Ejercicio 8
  $("#html_dom_e8b").hide();
  $("#html_dom_e8").click(function (e) {
    e.preventDefault();
    $("#html_dom_e8b").show();
  });
  $("#demo_e8").click(function (e) {
    e.preventDefault();
    document.getElementById("demo_e8b").style.display = "none";
  });

  // Ejercicio 9
  $("#html_dom_e9b").hide();
  $("#html_dom_e9").click(function (e) {
    e.preventDefault();
    $("#html_dom_e9b").show();
  });
  document.getElementById("demo_e9").addEventListener("click", myFunction);
};

const myFunction = () => {
  alert("Ejercicio 9 completado!");
};
