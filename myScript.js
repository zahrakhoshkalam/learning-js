// // The innerHTML property defines the HTML content:
// document.getElementById("demo").innerHTML = 5 + 6;
// //For testing purposes, it is convenient to use document.write():
// //point:Using document.write() after an HTML document is loaded, will delete all existing HTML:
// document.write(5 + 16);
// //using an alert box to display data:
// window.alert(15 + 6);
// //For debugging purposes, you can call the console.log()
// console.log(15 + 16);
//////////////////////////////////////EVENT////////////////////
// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }
///////////////////////////////////////////STRING/////////////////////////////
let x = "John"; // typeof x will return string
let y = new String("John"); // typeof y will return object
let str = "Apple, Banana, Kiwi";
str.slice(7, 13); // Returns Banana
str.slice(-12, -6); // Returns Banana
str.slice(7); // Returns Banana,Kiwi
//substring() cannot accept negative indexes.
substring(7, 13); // Returns Banana
//substr(), the second parameter specifies the length of the extracted part.
str.substr(7, 6); // Returns Banana
str.substr(-4); // Returns Kiwi
//The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Me");
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.replace(
    /W3schools.com/i,
    "Me"
  );
}
function myFunction2() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.toUpperCase();
}
function myFunction3() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML = text.concat(" soon");
}

function myFunction4() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo2").innerHTML = text.charAt(10);
}
function myFunction5() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo3").innerHTML = text.charCodeAt(0);
}
///str.indexOf("locate")
function myFunction6() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo4").innerHTML = text.indexOf("visit");
}
