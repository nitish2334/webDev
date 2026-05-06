
// let arr =

// [
//   {
//     "name": "Rahul Sharma",
//     "city": "Delhi",
//     "phone": "9876543210",
//     "profession": "Software Engineer"
//   },
//   {
//     "name": "Priya Verma",
//     "city": "Mumbai",
//     "phone": "9123456780",
//     "profession": "Doctor"
//   },
//   {
//     "name": "Amit Patel",
//     "city": "Ahmedabad",
//     "phone": "9988776655",
//     "profession": "Business Analyst"
//   },
//   {
//     "name": "Sneha Reddy",
//     "city": "Hyderabad",
//     "phone": "9012345678",
//     "profession": "Teacher"
//   },
//   {
//     "name": "Vikram Singh",
//     "city": "Jaipur",
//     "phone": "9090909090",
//     "profession": "Architect"
//   }
// ]

// arr.forEach((name)=> {
//     console.log(name);
    
// })

// console.log(arr);
// console.log(arr[1] ["name"]);

// // dot notation

// console.log(arr[1] .name

// );

// let raunak = {

//     "name": "Rahul Sharma",
//     "city": "Delhi",
//     "phone": "9876543210",
//     "profession": "Software Engineer"
//   }

// console.log(Object.keys(raunak));
// console.log(Object.values(raunak));


let ar = [12, 23,24, 3, 45,23, 5, 67 ,4 ,89,23, 90];

ar.sort((a, b) => a - b);
console.log(ar);

console.log(ar.find((val) => val > 23));

console.log(ar.findIndex((val) => val === 23));

console.log(ar.findLastIndex((val) => val === 23));



// filter\\\

let ar2 = [12, 23,24, 3, 45,23, 5, 67 ,4 ,89,23, 90];

console.log(ar2.filter((val)=> val > 23));
console.log(ar2.find((val) => val > 23));
console.log(ar2.slice(0,3));


let ab = "this is web-development classs";

console.log(ab);

console.log(ab.split(" "));

console.log(ab.split("-"));








