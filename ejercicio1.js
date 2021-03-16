function eje1() {
    var carName = "Volvo";
    /*     console.log("Ejercicio 1: " + carName);
    */
    document.getElementById("eje1").innerHTML = "car name: " + carName;
}
document.getElementById("boton").onclick = function () {
    eje1();
}

// Ejer 2
function eje2() {
    let x = 50;
    document.getElementById("eje2").innerHTML = "Value x: " + x;
}
document.getElementById("boton2").onclick = function () {
    eje2();
}
//Eje 3
function eje3() {
    var x = 5;
    var y = 10;
    var z = x + y;
    document.getElementById("eje3").innerHTML = "sum x + y: " + z;
}
document.getElementById("boton3").onclick = function () {
    eje3();
}

//Eje4
function eje4() {
    var x = 5;
    var y = 10;
    var z = x + y;
    alert(document.getElementById("eje4").innerHTML = "z= 5 + 10 =>" + z)
}
document.getElementById("boton4").onclick = function () {
    eje4();
}

//Eje5
function eje5() {
    var firstName = "Jhon", lastName = "Doe", age = 35;

    document.getElementById("eje5").innerHTML = " FisrtName, lastName, age: " + firstName + " " + lastName + " " + age;
}
document.getElementById("boton5").onclick = function () {
    eje5();
}

//Eje6

function eje6() {


    alert(document.getElementById("eje6").innerHTML = " 10 * 5=" + 15);
}
document.getElementById("boton6").onclick = function () {
    eje6();
}
//Ejer7
function eje7() {
    let x = 10;
    let y = 2;
    let z = x / y;

    alert(document.getElementById("eje7").innerHTML = " 10 / 2=" + z);
}
document.getElementById("boton7").onclick = function () {
    eje7();
}

//Ejer8
function eje8() {
    let x = 15;
    let y = 9;
    let z = x % y;

    alert(document.getElementById("eje8").innerHTML = " 15/ 9 = " + z);
}
document.getElementById("boton8").onclick = function () {
    eje8();
}
//Ejer9
function eje9() {
    let x = 10;
    let y = 5;

    x += y;

    alert(document.getElementById("eje9").innerHTML = " x += y = " + x);
}
document.getElementById("boton9").onclick = function () {
    eje9();
}

//Ejer10
function eje10() {
    let x = 10;
    let y = 5;

    x *= y;

    alert(document.getElementById("eje10").innerHTML = " 10 *= 5 = " + x);
}
document.getElementById("boton10").onclick = function () {
    eje10();
}
//Ejer11
function eje11() {
    var length = 16;
    var lastName = "Johnson";

    var x = {
        firstName: "John",
        lastName: "Doe"
    };
    document.getElementById("eje11").innerHTML = " 16 // Number  ; Johnson // String ; var x ={} // Object ";
}
document.getElementById("boton11").onclick = function () {
    eje11();
}
//   eje12();

function eje12() {


    alert(document.getElementById("eje12").innerHTML = " myfunction= 'Hello World!'");
}
document.getElementById("boton12").onclick = function () {
    eje12();
}

//   eje13();
/* function myFunction(){
    
  document.getElementById("eje13").innerHTM="  Hello World!";
} */
function eje13() {


    alert(document.getElementById("eje13").innerHTML = "myfunction2= 'Hello World!");
}
document.getElementById("boton13").onclick = function () {
    eje13();
}

//Ejer14
function eje14() {


    alert(document.getElementById("eje14").innerHTML = "myfunction3= 'Hello! ");
}
document.getElementById("boton14").onclick = function () {
    eje14();
}
//Ejer15
function eje15() {


    document.getElementById("demo").innerHTML = "id='demo: 'Hello! ";
}
document.getElementById("boton15").onclick = function () {
    eje15();
}
//Ejer16
function eje16() {

    let person = {
        firstName: "John",
        lastName: "Doe"
    }
    document.getElementById("eje16").innerHTML = "person.firstName : " + person.firstName;
}
document.getElementById("boton16").onclick = function () {
    eje16();
}
//Ejer17
function eje17() {

    let person = {
        firstName: "John",
        lastName: "Doe",
        country: "Norway"

    }
    document.getElementById("eje17").innerHTML = "add contry 'Norway' : " + person.firstName + "-" + person.lastName + "-" + person.country;
}
document.getElementById("boton17").onclick = function () {
    eje17();
}
//Ejer18
function eje18() {

    let person = {
        name: "John", age: 50
    }
    alert(document.getElementById("eje18").innerHTML = " person.name + person.age =  " + person.name + " is " + person.age);
}
document.getElementById("boton18").onclick = function() {
    eje18();
}

//Ejer19
function eje19() {

    let myFunction = " i'm Function example 19";
   
document.getElementById("eje19").innerHTML = myFunction;

}
//Ejer20

function eje20() {

    let myFunction = " i'm Function example 20";
   
document.getElementById("eje20").innerHTML = myFunction;
}
/* document.getElementById("boton19").onclick = function() {
    eje19();
} */ 

//Ejer21


//Ejer22

function eje22() {

    let myFunction = " Hello World!";
      let x = myFunction.length;
      document.getElementById("eje22").innerHTML ="Lenght of the word 'Hello World!' is: "+x;
}
document.getElementById("boton22").onclick = function() {
    eje22();
}

//Ejer23
function eje23() {

    let txt = "We are \"Vikings\"";
      document.getElementById("eje23").innerHTML =" \"Vikings\": "+txt;
}
document.getElementById("boton23").onclick = function() {
    eje23();
}

//Francisco
//Concatenar las dos cadenas para alertar a "¡Hola Mundo!".
function eje24() {

    var str1 = "Hello ";
    var str2 = "World!";
    alert(str1 + str2);
    document.getElementById("eje24").innerHTML = carName;
}
document.getElementById("boton24").onclick = function() {
    eje24();
}

//Busque la posición del carácter en la cadena .h txtvar txt = "abcdefghijklm";
function eje25() {

    var txt = "abcdefghijklm";
    var pos = txt.indexOf("h");
    alert(pos);
    document.getElementById("eje25").innerHTML = carName;
}
document.getElementById("boton25").onclick = function() {
    eje25();
}

//Utilice el método slice para devolver la palabra "bananas".
function eje26() {

    var txt = "I can eat bananas all day";
    var x = txt.slice(10, 17);
    alert(x);
    document.getElementById("eje26").innerHTML = carName;
}
document.getElementById("boton26").onclick = function() {
    eje26();
}

//Utilice el método String correcto para reemplazar la palabra "Hola" por la palabra "Bienvenido".
function eje27() {
    var txt = "Hello World";
    txt = txt.replace("Hello", "Welcome");
    alert(txt);
    document.getElementById("eje27").innerHTML = carName;
}
document.getElementById("boton27").onclick = function() {
    eje27();
}

//Convierta el valor de en mayúsculas.txt
function eje28() {
    var txt = "Hello World";
    txt = txt.toUpperCase();
    alert(txt);
    document.getElementById("eje28").innerHTML = carName;
}
document.getElementById("boton28").onclick = function() {
    eje28();
}

//Convierta el valor de en minúsculas.txt
function eje29() {
    var txt = "Hello World";
    txt = txt.toLowerCase();
    alert(txt);
    document.getElementById("eje29").innerHTML = carName;
}
document.getElementById("boton29").onclick = function() {
    eje29();
}

//Obtenga el valor "Volvo" de la matriz.cars
function eje30() {
    var cars = ["Saab", "Volvo", "BMW"];
    var x = cars[1];
    alert(x);
    document.getElementById("eje30").innerHTML = carName;
}
document.getElementById("boton30").onclick = function() {
    eje30();
}

//Cambie el primer elemento de los coches a "Ford".
function eje31() {
    var cars = ["Volvo", "Jeep", "Mercedes"];
    cars[0] = "Ford";
    alert(cars);
    document.getElementById("eje31").innerHTML = carName;
}
document.getElementById("boton31").onclick = function() {
    eje31();
}

//Avise el número de elementos de una matriz mediante la propiedad Array correcta.
function eje32() {
    var cars = ["Volvo", "Jeep", "Mercedes"];
    alert(cars.length);
    document.getElementById("eje32").innerHTML = carName;
}
document.getElementById("boton32").onclick = function() {
    eje32();
}

//Utilice el método Array correcto para quitar el último elemento de la matriz fruits
function eje33() {
    var fruits = ["Banana", "Orange", "Apple"];
    fruits.pop();
    alert(fruits);
    document.getElementById("eje33").innerHTML = carName;
}
document.getElementById("boton33").onclick = function() {
    eje33();
}

//Utilice el método Array correcto para agregar "Kiwi" a la matriz fruits
function eje34() {
    var fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Kiwi")
    alert(fruits);
    document.getElementById("eje34").innerHTML = carName;
}
document.getElementById("boton34").onclick = function() {
    eje34();
}

//Utilice el método para eliminar "Orange" y "Apple" de .splice()fruits
function eje35() {
    var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.splice(1, 2);
    alert(fruits);
    document.getElementById("eje35").innerHTML = carName;
}
document.getElementById("boton35").onclick = function() {
    eje35();
}

//Utilice el método Array correcto para ordenar la matriz alfabéticamente fruits
function eje36() {
    var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.sort();
    alert(fruits);
    document.getElementById("eje36").innerHTML = carName;
}
document.getElementById("boton36").onclick = function() {
    eje36();
}

//Cree un objeto Date y avise a la fecha y hora actuales.
function eje37() {
    var d = new Date();
    alert(d);
    document.getElementById("eje37").innerHTML = carName;
}
document.getElementById("boton37").onclick = function() {
    eje37();
}

//Utilice el método Date correcto para extraer el año (cuatro dígitos) de un objeto date.
function eje38() {
    var d = new Date();
    year = d.getFullYear();
    alert(year);
    document.getElementById("eje38").innerHTML = carName;
}
document.getElementById("boton38").onclick = function() {
    eje38();
}

//Utilice el método Date correcto para sacar el mes (0-11) de un objeto date.
function eje39() {
    var d = new Date();
    month = d.getMonth();
    alert(month);
    document.getElementById("eje39").innerHTML = carName;
}
document.getElementById("boton39").onclick = function() {
    eje39();
}

//Utilice el método Date correcto para establecer el año de un objeto date en 2020.
function eje40() {
    var d = new Date();
    d.setFullYear(2020);
    alert(d);
    document.getElementById("eje40").innerHTML = carName;
}
document.getElementById("boton40").onclick = function() {
    eje40();
}

//Utilice el método Math correcto para crear un número aleatorio.
function eje41() {
    var r = Math.random();
    alert(r);
    document.getElementById("eje41").innerHTML = carName;
}
document.getElementById("boton41").onclick = function() {
    eje41();
}

//Utilice el método Math correcto para devolver el mayor número de 10 y 20.
function eje42() {
    var x = (10, 20);
    alert(x);
    document.getElementById("eje42").innerHTML = carName;
}
document.getElementById("boton42").onclick = function() {
    eje42();
}

//Utilice el método Math correcto para redondear un número al entero más cercano.
function eje43() {
    var x = Math.round(5.3);
    alert(x);
    document.getElementById("eje43").innerHTML = carName;
}
document.getElementById("boton43").onclick = function() {
    eje43();
}

//Utilice el método Math correcto para obtener la raíz cuadrada de 9.
function eje44() {
    var x = Math.sqrt(9);
    alert(x);
    document.getElementById("eje44").innerHTML = carName;
}
document.getElementById("boton44").onclick = function() {
    eje44();
}

//Elija el operador de comparación correcto para alertar, cuando sea mayor que .true x y
function eje45() {
    x = 10;
    y = 5;
    alert(x > y);
    document.getElementById("eje45").innerHTML = carName;
}
document.getElementById("boton45").onclick = function() {
    eje45();
}