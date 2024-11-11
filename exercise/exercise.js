//변수
const calculator = {
  add: function (a, b) {
    console.log("a+b =", a + b, "입니다.");
  },
  minus: function (a, b) {
    console.log("a-b =", a - b, "입니다.");
  },
  mul: function (a, b) {
    console.log("a*b =", a * b, "입니다.");
  },
  div: function (a, b) {
    console.log("a/b =", a / b, "입니다.");
  },
  power: function (a, b) {
    console.log("a**b =", a ** b, "입니다.");
  },
};

//함수
function won() {
  console.log("Myname is won");
}

//실행
// won();
// calculator.add(1, 1);
// calculator.minus(1, 1);
// calculator.mul(10, 2);
// calculator.div(10, 2);
// calculator.power(2, 2);

const age = prompt("how old are you?");
console.log(age);
