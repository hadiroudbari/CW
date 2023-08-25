const greeting = function () {
  console.log("hello");
  setInterval(message, 3000);
};
const message = function () {
  console.log("repeat");
};
function showMessage(greet) {
  setTimeout(greet, 2000);
}
showMessage(greeting);
