let a = 20,
  b = 30;

function sum(x, y) {
  let z = x + y;
  console.log(z);
}

sum(a, b);

// 22222222222

const abc = function () {
  console.log("hello world");
};
console.log(abc);
abc();

// 3333333333333

function welocome() {
  console.log("welcome to js");
}
welocome();


// 44444

const arrowfun = () => {
  console.log("i am a function");
};
arrowfun();



// 5555555555

const addarrow = (x, y) => x + y;

console.log(addarrow(5, 6));
