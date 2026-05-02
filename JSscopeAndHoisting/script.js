// var a= 10;
// console.log(a);
// console.log(b);
// var b = 20;
// console.log(a);
// console.log(b);

let test = "this is global test variable";

function classA() {
  console.log("classA", test);
}
function classB() {
  console.log("classB", test);
}
function classC() {
  let test2 = "this is local vriable";
  console.log("classC", test);
}
function classD() {
  console.log("classD", test);

  {
    let v = 10;
    console.log(v);
  }
}
function classE() {
  console.log("classE", test);
}
function classF() {
  console.log("classF", test);
}
function classG() {
  console.log("classG", test);
}





classA();
classB();
classC();
classD();
classE();
classF();
classG();
