"use strict";

// let postUrl = "https://jsonplaceholder.typicode.com/posts";

// let init = () => {
//  // GET Method using Fetch;
//     let userTBody = document.getElementById("usertbody");
//     let items = "";
//     let output = fetch(postUrl).then((data) => data.json());

//     output.then((posts) => {
//       console.log(posts);
//       posts.forEach((element) => {
//         items += `<tr>
//                          <td>${element.userId} </td>
//                          <td>${element.title} </td>
//                          <td>${element.body} </td>
//                         </tr>`;
//       });
//       userTBody.innerHTML = items;
//     });
// };

// let add = (event) => {
//   let uId = document.getElementById("userId");
//   let title = document.getElementById("title");
//   let description = document.getElementById("description");
//   event.preventDefault();
//   let newObj = {
//     userId: Number(uId.value),
//     title: title.value,
//     description: description.value
//   };
//   let input = JSON.stringify(newObj);

//   let output = fetch(postUrl, {
//     method: 'POST',
//     body: input,
//     headers: {
//       'content-type': 'application/json'
//     }
//   }).then(response=>{
//       return response.json()
//    });

//   output.then((data) => {
//     console.log(data);

//     if('id' in data){
//       alert("Data Created Successfully")
//     }
//   }).catch(error=> console.log(error));

// };

// init();

// var color=["blue", "orange", "yellow", "Black", "purple", "green"];

// function box(color){
//   for(var i=0; i<color.length;i++){
//     document.getElementById("container").innerHTML += `<div id="box" style="height:50px;width:50px;background-color:${color[i]}"></div><br/>`
//   }
// }
// box(color);

// function add(){
//   var i=0;
//   return ()=>{
//     i++;
//     console.log(i)
//   }
// }
// var sum=add();

// sum();

// sum();

// sum();


// var sum=0;
// function add(...arr){
//   arr.forEach(value=>{
//    return sum+=value;

//   })
//   console.log( "res", sum);
// }

// add(1,2);
// add(5, 6, 7);
// add(10, 20, 30, 40);

//  var [firstname, ...user]=[1, 2, 3, 4, 5];
// console.log(firstname);
// console.log(user);

// function myFunc(a, b, c){
//   console.log(a,b,c);
// }
// var arr=[1, 3, 5];
// myFunc(...arr);

// var user={
//   name:"Akila",
//   email:"ak@gmail.com",
//   phone:"3456789"
// }
// user['phone']="37488";

// // user.phone="3409876";
// console.log(user.phone);

// user={...user, phone:"76543765", email:"akila@gmail.com"}
// console.log(user.phone,user.email);

// var user1=Object.assign({}, user);
// console.log(user1)

// var a;
// console.log(a);//op:undefined
// a=10;

// a=10;
// var a;
// console.log(a);//op:10


// a=10;
// let a;
// console.log(a);//op: ReferenceError: Cannot access 'a' before initialization


// console.log(a);//op:undefined
//  var  a=10;

// var fullname={
//   fname:"Akila",
//   mname:"Sri",
//   lname:"Priya",
//  printFullname:function(){
//   console.log(this.fname + ' ' + this.mname + ' '+ this.lname);
//  }
// }
// fullname.printFullname();


// function timerValues(i) {
//   var hour = Math.floor(i / 3600);
//   var min = Math.floor((i - hour * 3600) / 60);
//   var secs = i - (hour * 3600 + min * 60);
//   // var hour=Math.floor(i/60);
//   // var min =i-(hour*60);
//   // var secs=0;

//   if (hour < 10) hour = "0" + hour;
//   if (min < 10) min = "0" + min;
//   if (secs < 10) secs = "0" + secs;

//   document.getElementById("counter").innerHTML = hour + ":" + min + ":" + secs;
// }

// function startTimer(t, key) {
//   var sec = 0;
//   if (key == "m") {
//     sec = t * 60;
//   } else if (key == "h") {
//     sec = t * 3600;
//   } else if (key == "s") {
//     sec = t;
//   }

//   let settimer = setInterval(() => {
//     if (sec > 0) {
//       timerValues(sec);
//       sec--;
//     } else {
//       clearInterval(settimer);
//     }
//   }, 1000);
// }

// startTimer(20, "h");


// console.log("Factorial:")
//   var c=1;
  
//    function factorial(num){
//     for( var i=1;i<=num;i++){
//        c=c*i;
//     }
//       console.log(c);
//    }
//    factorial(5);

// console.log("Object into Array:")
//    var obj={
//     id:1,
//     name:"Akila",
//     age:20,
//     desgn:"DEv"
//    }
//    var arr=[];
//     for(var x in obj){
//       arr.push(obj[x]);
//       // arr.push([x]);
//     }
// console.log(arr);
// console.log(obj)

// console.log("Remove Duplicates:")
// var arr=[1, 2, 2, 3, 4, 1, 3, 4, 5];

// var unique=[];
// for(x of arr){
//   if(!unique.includes(x)){
//     unique.push(x);
//   }
// }
// console.log(unique);


// console.log("Count the characters:")
//  var s="school";
//  var input=prompt("Enter any character in school");

//  var count=0;
//  for(let x of s){
//   if(input==x){
//     count++;
//   }
//  }
// console.log(input, count);

// console.log("Array into Object with element as key and count as value:")
// var input=[1, 3, 2, 4, 1, 5, 3, 7, 6, 5, 4];
// var count=0;
// var obj={};var arr=[];

// for(var i=0;i<input.length;i++){
//   for(var j=i+1;j<input.length;j++){
//     if(input[i]>input[j]){
//       const temp=input[i];
      
//       input[i]=input[j];
//       input[j]=temp;
      
//     }     
// }
// }

// console.log(input);

// for(var x of input){
//   console.log(x)
//   if(obj[x]){ 
      
//     obj[x]++;
  
//   }
//     else{
//       obj[x]=1;
    
//     }
    
//   }

//   console.log(obj);

// console.log("Max and Min in An Array:")
//  var arr=[2, 3, 1, 4, 6, 8, 10, 23, 43];

//  for(var i=0;i<arr.length;i++){
//   for (var j=i+1;j<arr.length;j++){
//     if(arr[i]>arr[j]){
//       var temp=arr[i];
//       arr[i]=arr[j];
//       arr[j]=temp;
//     }
//   }
//  }
// console.log(arr);
// var max=arr[arr.length-1];
// console.log("Max:", max);
// var min=arr[0];
// console.log("Min:",min)

// console.log("Reverse the Array:")
// var a=[1,3, 6,12, 19, 23, 34];
// var rev=[];
// for(var i=a.length-1;i>=0;i--){
//  rev.push( a[i]);

// }
// console.log(rev)
// console.log(typeof(rev))


// console.log("sort the string:")

// var str="javascript";
// var strNew=str.split('').sort().join('');
// console.log(strNew)

// console.log("First Letter into UpperCase:")

// var s="js string";
// var str=s.charAt(0).toUpperCase()+s.slice(1);
// console.log(str)

// console.log("Add word into string:")

// var s="js string";//op:js akila string
// var str=s.replace('js','js akila');
// console.log(str)

// console.log("Clone the Array:")
// let arr=[1, 2, 3, 4, 5];
// let newArr=arr.slice();
// console.log(newArr)

// console.log("Detect DataTypes:")

// function findDataType(value){
//   var dTypes=[Function, Number, String, Boolean, Object];

//   if(typeof value === "object" || typeof value === "function"){
//     for (var i=0;i<dTypes.length;i++){
//       if(value instanceof dTypes[i]){
//       return dTypes[i];
//       }
//     }
   
//   }
//   return typeof value;
// }
//  var result=findDataType(true);
//  console.log(result)


var obj =[
  { country: "India", continent: "Asia", },
  { country: "China", continent: "Asia" },
  { country: "Japan", continent: "Asia" },
  { country: "Pakistan", continent: "Asia" },
  { country: "Finland", continent: "Europe" },
  { country: "Swedan", continent: "Europe" },
  { country: "Spain", continent: "Europe" },
  { country: "USA", continent: "North America" },
  { country: "Mexico", continent: "North America" },
  { country: "Brazil", continent: "South America" },
  { country: "Peru", continent: "South America" },
  { country: "Chile", continent: "South America" },
  { country: "Nigeria", continent: "Africa" },
  { country: "Egypt", continent: "Africa" },
];

// var obj1 = [];

// for (let x of obj) {
//   if (obj1.length > 0) {
//     let flag=0;
//     for (let y of obj1) {
//       if (x.continent == y.continent) {
        
//         y.country.push(x.country);
//         flag=1;
//      break;
        
//       }
//      }
//     if(flag==0) {
//        let newX={ continent:x.continent, country:[x.country]};
//        obj1.push(newX);
//       }
      
//      } else {
//      let newX={continent: x.continent,  country:[ x.country] };
//    obj1.push(newX);
 
//   }
// }

// console.log(obj1)

//Another Method:

// var obj1={};

//   for(let x of obj){
//   if(!obj1[x.continent]){
//     obj1[x.continent]=[];
//   }
//   obj1[x.continent].push(x.country);
``
//   }

// console.log(obj1);

// var obj2=Object.entries(obj1);
// console.log(obj2)


//By forEach method:

// var obj1={};

// obj.forEach(item=>{
//     if(!obj1[item.continent]){
//       obj1[item.continent]=[];
//     }
//     obj1[item.continent].push(item.country);
//   });
   
  
//   console.log(obj1);
  
//   var obj2=Object.entries(obj1);
//   console.log(obj2)


// function myFunc(){
//   for(let i=0;i<3;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },2000)
//   }
// }
// myFunc(); // 0 1 2


// function myFunc(){
//   for(var i=0;i<3;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },2000)
  
//   }
//   console.log("aki")
// }
// myFunc();// aki  3 3 3 

// let x={}, y={name:"akila"}, z={name:"saro"};
// x[y]={name:"rose"};
// y[z]={name:"jack"};

// console.log(x[y]);//{name: 'rose'}

// var a=10;
// {
//   var a=-10;
// }
// let b=a;
// {
//   let b=-20;
// }
// console.log(b);//-10

// b=25;
// var b;
// console.log(b);//25


// b=25;
// let b;
// console.log(b);//ReferenceError: Cannot access 'b' before initialization
// console.log(name)
// console.log(location)
// var name="aki"
// var location="india"

// const demo=document.getElementById("demo");

// setInterval(()=>{
//   const date= new Date;
//   demo.innerHTML=date.toLocaleTimeString();
// },1000);


// var root =document.getElementById("root")
// let counter=0;
// let intervalId=null;

// function startFunction(){
//   intervalId=setInterval(()=>{
//     root.innerHTML=counter;
//     counter++;

//   }, 1000)
// }

// function stopFunction(){
//   clearInterval(intervalId)


// }


// let timeout;
// function myFunction() {
//    timeout = setTimeout(alertFunc, 2000);
// }
// function alertFunc() {
//   console.log("Hello");
//    alert("Hello User... Start Learning now!");
// }


// var root=document.getElementById("root")
// async function promiseFunction(){
//   const mypromise= new Promise(function(resolve, reject){
//     setTimeout(()=>{
//       resolve("Hello Geeks wrapped setTimeout() in a promise")
//     }, 1000)
//   })
// let result= await mypromise;
//   root.innerHTML=result;
// }


//  const mypromise= new Promise(function(resolve, reject){
//   var sum=2+3;
//   setTimeout(()=>{
//     if(sum!=0){
//       resolve(console.log(sum))
//     }else{
//       reject(console.log("error"))
//     }
    
//   }, 1000)
// }) //5

function startCountDown(){
  var countInput=document.getElementById("countInput")
  var result=document.getElementById("root");

  let count=parseInt(countInput.value);
   if(isNaN(count) || (count<0)){
    result.textContent="please enter a valid number";
    // return;
   }
   let currentCount =count

   let intervalId=setInterval(()=>{
    if(currentCount>=0){
      result.textContent=currentCount
      currentCount--;

    }else{
    clearInterval(intervalId);
    }
   }, 1000)
}



