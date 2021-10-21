// // The innerHTML property defines the HTML content:
// document.getElementById("demo").innerHTML = 5 + 6;
// //For testing purposes, it is convenient to use document.write():
// //point:Using document.write() after an HTML document is loaded, will delete all existing HTML:
// document.write(5 + 16);
// //using an alert box to display data:
// window.alert(15 + 6);
// //For debugging purposes, you can call the console.log()
// console.log(15 + 16);
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
