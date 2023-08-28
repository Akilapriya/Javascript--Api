"use strict";
// let init = () => {
//   let myData = new Promise((resolve, reject) => {
//     var a = 10;
//     setTimeout(() => {
//       if (a == 20) {
//         resolve("I Love JS");
//       } else {
//         reject("Error Occureed");
//       }
//     }, 5000);
//   });

//   myData
//     .then((success) => {
//       display(success);
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });
// };

// let display = (text) =>
//   console.log(text);
// };
// init();

let postUrl = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData() {
//   var output = await fetch(postUrl);
//   var response = await output.json();
//   console.log(output);
//   console.log(response);
// }
// fetchData();

// let fetchData=async ()=> {
//     var output = await fetch(postUrl);
//     var response = await output.json();
//     console.log(output);
//     console.log(response);
//   }
//   fetchData();

// console.log("Class:");

// class Cars{
//     constructor(brand, model, year){
//         this.brand=brand;
//         this.model=model;
//         this.year=year;
//     }

//     getCarDetails(name){
//         console.log(this.brand,this.year, name);
//     }
// }

// let myCar=new Cars("Tata", "Tiago", 2018);
// myCar.getCarDetails("Nexon");

// class Car{
//     constructor(brand){
//         this.carname=brand;
//     }
//     present(){
//         return 'I have a'+ ' ' + this.carname;
//     }
// }

// class Model extends Car{
//     constructor(brand, model){
//         super(brand);
//         this.model=model;
//     }
//     show(){
//         console.log( this.present()  + ', is a' + ' '+  this.model);

//     }
// }
//  let carModels=new Model("Ford", "Mustang");
// carModels.show();

// var person={
//     name:"Akila",
//     age:22,
//     play:(name)=>{
//         return `${name} is playing`;
//     },
//     dance:(age)=>{
//         return `${age} years old boy can play cricket`;
//     }
// }
// console.log(person.play("Arun"));
// console.log(person.dance(23));

//  var num=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// function checkGreaterThan15(value){
//     return value>15;
// }
//     var newNums=num.map(checkGreaterThan15)
//         console.log(newNums);
//     var newNums=num.filter(checkGreaterThan15)
//         console.log(newNums);

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// var result;
// a.forEach((value, index) => {
//   if (index % 2 != 0) {
//     result = value * value;
//   }
//   console.log(result);
// });

// var x=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// x.forEach((value, index) => {
//     if(index % 2 == 0){
//         console.log("BUZZ")
//     }else{
//         console.log("FIZZ")
//     }
// });

//  console.log("FIZZBUZZ:")

//  for(i=1;i<=100;i++){
//     // console.log(i);
//     if(i%5==0 && i%3==0){
//         console.log("Multiples of five & three:FIZZBUZZ:",i);
//     }else if(i%5==0){
//         console.log("Multiples of five:BUZZ:",i);
//     }else if(i%3==0){
//         console.log("Multiples of three:FIZZ:",i);
//     }
//  }

// console.log("Reverse Array:")

// var arr=[1, 2, 3, 4, 5];
// var revArr=[];

// function reverseArr(){
//     revArr=  arr.reverse();
//     console.log(revArr);
// }
// reverseArr();

// console.log("Filter Long Words:")
//  var fruits=["apple", "banana", "orange", "Strawberry"];
//  var n=5;

//   function checkLongWords(word){
//     return word.length > n
//   }

// var filteredArray=fruits.filter(checkLongWords);
// console.log(filteredArray);


// console.log("Sum of multiples:");

// var sum=0;
//  function sumOfMultiples(n){
// for(var i=1;i<n;i++){
//     if(i%3==0 || i%5==0){
//         console.log("The multiples of 3 or 5:",i)
//        sum+=i;

//     }

// }
// console.log("The sum is :",sum);
//  }
//  sumOfMultiples(10);

// console.log("Unique Characters:");

//  function isUnique(str) {
//     return new Set(str).size == str.length;
//   }
//    var result=isUnique('apple');

//   console.log(result);

//   console.log(isUnique('fig'));

// console.log("Anagrams:");

// let words = ["bag", "foo", "abg", "oof", "cat", "ofo", "atc", "gab", "tac"];
// let anagrams = {};
// let collectedAnagrams = [];

// function collectAnagrams(words) {
//   for (let word of words) {
//     let letters = word.split("").sort().join("");

//      anagrams[letters] ? anagrams[letters].push(word): anagrams[letters] = [word];
 
//   }
  
//   for (let key in anagrams) {
//     collectedAnagrams.push(anagrams[key]);
//   }
//   return collectedAnagrams;
// }
// var result = collectAnagrams(words);
// console.log(result);



console.log(fname);
// console.log(location)
var fname="akila";
//  var nlocation="india";

// console.log(nlocation)