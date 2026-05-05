// let arr =[12, 23, 34, 45, 56];

// for(i=0; i<5; i++)
// {
//     console.log(arr[i]);
// }

// console.log(arr);

// arr[2]= arr[2]+10;

// console.log(arr);

// arr=[];
// console.log(arr);

let arr =[12, 23, 34, 45, 56,67,87,90];
console.log(arr);


arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);


arr.unshift(5);
console.log(arr);


arr.shift();
console.log(arr);


console.log(arr.at(4));

console.log(arr.indexOf(90));

console.log(arr.includes(90));
console.log(arr.indexOf(90));


// array.sort use karna 

let unar =[45,63,36,78,90,23,56,65,64,34,23,]
console.log(unar);
unar.sort();
console.log(unar);
unar.reverse();
console.log(unar);


 let ar =[12, 23, 34, 45, 56];

for(i=0; i<5; i++)
{
    console.log(ar[i]);
}

console.log("for each loop");



ar.forEach((element)=>{
    console.log(element);
})