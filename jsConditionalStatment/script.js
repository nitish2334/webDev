// let n =  5;

// if (n > 0) {
//   console.log("is positive integer");
// } else {
//   console.log(" negative integer");
// }

age = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

let number = 7;
if (number || 0) {
  console.log("check even");
} else {
  console.log("check odd");
}

marks = 90;
if (marks > 90) {
  console.log("A");
} else {
  console.log("B");
}
if (marks < 75 && marks > 50) {
  console.log("c");
} else {
  console.log("fail ");
}

let data;
let x = "raj";

data = x || "N/A";

//  if(x)
//  {
//     data = x;
//  }
//  else{
//     data = "N/A";
//  }
console.log(data);

let choice =3;
switch ((choice )) {
  case 1: {
    console.log("tea");
    break;
  }

  case 2:
    {
      console.log("coffee");
      break;
    }
    case 3:
        {
        console.log("milak");
        break;
        
    }
    
  default: {
    console.log("panni");
  }
}
