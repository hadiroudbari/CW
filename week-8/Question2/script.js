// function f() {
//   console.log(this.name); // ?
// }

// let user = {
//   name: "hadi",
//   g: function () {
//     return f.bind(this);
//   },
// };

// let b = user.g();
// b();

// 1

// function f() {
//   console.log(this);
// }

// let user2 = {
//   name: "hajar",
//   age: 25,
// };

// let user = {
//   a: f.bind(false),
//   b: f.bind(0),
//   c: f.bind(""),
//   d: f.bind(undefined),
//   g: f.bind(null),
//   h: f.bind(user2),
// };
// user.a();
// user.b();
// user.c();
// user.d();
// user.g();
// user.h();

// RESULT : when we bind null/undefined to function then this will points to window in that case or maybe points to its own this that depends on what this means there . and other way if we bind sth except null/undefined that points to current binded value.

// 2

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password === "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 3

const show = function (srt) {
  console.log(srt);
};

const delay = function (func, ms) {
  return function (value) {
    setTimeout(func.bind(this, value), ms);
  };
};

const newfunc = delay(show, 2000);
const newfunc2 = delay(show, 4000);
newfunc("salam");
newfunc2("khoobi?");

// 4

function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}
let f = debounce(console.log, 1000);
