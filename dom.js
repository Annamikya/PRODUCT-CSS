// let divs= document.querySelectorAll('.box');
// divs[0].innerText="unique div" ;
// let element= document.getElementById("box1").style.backgroundColor="red";

// let element2= document.getElementById("box2").style.backgroundColor="yellow";

// let element3= document.getElementById("box3").style.backgroundColor="green";

// console.log(element);
// let heading = document.getElementById("heading");

//     let paragraph = document.createElement("p");
//     paragraph.innerText = heading.innerText
//     paragraph.style.backgroundColor = "yellow";

//     heading.parentNode.replaceChild(paragraph, heading);
// let value = document.getElementById("head").getAttribute("id");
// console.log(value);
// let setAttribute = document.getElementById("head").setAttribute("class","newclass");
//  let setAttribute = document.getElementById("head").setAttribute("id","newid");
// let deleteAttribute = document.getElementById("head").remove();
// let newHeading = document.createElement("h1");
// newHeading.innerText="New Heading 1";
// document.body.appendChild(newHeading);
// let newimg = document.createElement("img")
// newimg.src="https://encrypted-tbn0.gstatic.com/es?q=tbn:ANd9GcQAPf_062JKWOBQr9rKxfyjLtlwzCn6Wwx_fJ6vQDIAgQ&s=10"
// document.body.appendChild(newimg).style.height="200px";
// document.body.appendChild(newimg).style.width="200px";
// document.body.appendChild(newimg).style.border="2px solid";
// let count = 0;
//     const counterElement = document.getElementById('counter');
//     function increment() {
//       count++;
//       updateDisplay();
//     }
//     function decrement() {
//       count--;
//       updateDisplay();
//     }

//     function reset(){
//       count = 0;
//       updateDisplay();
//     }
//     function updateDisplay() {
//       counterElement.innerText = count;
//       if (count > 0) {
//         counterElement.style.color = "#52c41a"; 
//       } else if (count < 0) {
//         counterElement.style.color = "#ff4d4f"; 
//       } else {
//         counterElement.style.color = "#333";
//       }
//     }
// function greet(name,callback) {
//   console.log(`I am ${name}`);
//   callback();
// }

// function role(){
//   console.log("I am a student");
// }

// greet("Annamikya",role,);
// function checkStudentResult(marks, callback) {
//   if (marks < 70) {
//     callback("Fail");
//   } else {
//     callback("Pass");
//   }
// }

// checkStudentResult(65, function (result) {
//   console.log(`Student result: ${result}`);
// });

// checkStudentResult(85, function (result) {
//   console.log(`Student result: ${result}`);
// });
// checkStudentResult(77,function(result){
//   console.log( `Student result: ${result}`)
// });
// setTimeout(()=>{
//   console.log("Timer Activated.....");
// },5000);
// setTimeout(()=>{
//   console.log("Timer Deactivated.....");
// },2000);
// setTimeout(()=>{
//   console.log("Step 1: Task uncomplete....");
//   setTimeout(()=>{
//     console.log("Step 2: Task uncomplete.....");
//     setTimeout(()=>{
//       console.log("Step 3: Task uncomplete.....");
//       setTimeout(()=>{
//         console.log("Step 4: Task uncomplete.....");
//       },9000)
//     },6000)
//   },3000)
// },1000);

 

// function foodDeliveryProcess(callback) {
//   console.log("recieved");
  
//   setTimeout(() => {
//     console.log(" Step 1: Order Received ");
    
    
//     setTimeout(() => {
//       console.log(" Step 2: Restaurant Preparing Food ");
      
      
//       setTimeout(() => {
//         console.log("Step 3: Food Packed ");
        
        
//         setTimeout(() => {
//           console.log(" Step 4: Delivery Partner Picked Up ");
          
          
//           setTimeout(() => {
//             console.log(" Step 5: Food Delivered ");
            
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// };


// foodDeliveryProcess(function(message) {
//   console.log("order successfull");
// });
// function orderReceived(callback) {
//     setTimeout(() => {
//         console.log(" Order Received");
//         callback();
//     }, 2000);
// }

// function restaurantPreparingFood(callback) {
//     setTimeout(() => {
//         console.log(" Restaurant is Preparing Food");
//         callback();
//     }, 2000);
// }

// function foodPacked(callback) {
//     setTimeout(() => {
//         console.log(" Food Packed");
//         callback();
//     }, 2000);
// }

// function deliveryPartnerPickedUp(callback) {
//     setTimeout(() => {
//         console.log(" Delivery Partner Picked Up the Food");
//         callback();
//     }, 2000);
// }

// function foodDelivered() {
//     setTimeout(() => {
//         console.log(" Food Delivered");
//     }, 2000);
// }


// orderReceived(function () {
//     restaurantPreparingFood(function () {
//         foodPacked(function () {
//             deliveryPartnerPickedUp(function () {
//                 foodDelivered();
//             });
//         });
//     });
// });

//  

//  console.log("hello");
//  setTimeout(()=>{
//   console.log("hi");
//  },4000);
//  console.log("three");
// const hello = ()=>{
//   console.log("hello");
// }
// setTimeout(hello,3000);
// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log("data",dataId);
//     if (getNextData){
//       getNextData();
  

//     }
//   },2000);
// }
//CALLBACK HELL
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3);
//   });
// });

// let promise = new Promise((resolve,reject)=>{
//   console.log("i am promise");
//   reject("error");
// } )

// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//     console.log("data",dataId);
//     resolve("success");
//     if (getNextData){
//       getNextData();
  

//     }
//   },2000);
// });
// }


//PROMISE CHAIN
// getData(1)
//   .then((res)=>{
//     //console.log("getting data 1....");
//     return getData(2);
//   })
//   .then((res)=>{
//     return getData(3);
//   })
//   .then((res)=>{
//     console.log(res);
//   })
// const getPromise = ()=> {
//   return new Promise((resolve,reject)=>{
//     console.log("i am promise");
//     // resolve()
//     reject("error");
// } );
// };
// let promise = getPromise();
// // promise.then((res)=>{})
// promise.catch((err) =>{
//   console.log("promise remove",err);
// })

// function asyncFunc1(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("some data1");
//       resolve("success");
//     },4000)
//   });
// }
// console.log("fetching data1");
// //let p1=asyncFunc1();
// asyncFunc1().then((res)=>{
//   // console.log(res);
//   console.log("fetching data2");
//   //let p2=asyncFunc2();
//   asyncFunc2().then((res)=>{});
//     // console.log(res);
    
// });



// function asyncFunc2(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("some data2");
//       resolve("success");
//     },4000)
//   });
// }


//ayncs await
// async function getweatherData (){
//   await api();
// }
// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("weather data");
//       resolve("success");
//     },2000);
//   })
// }

//ASYNC AWAIT
// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//     console.log("data",dataId);
//     resolve("success");
//     if (getNextData){
//       getNextData();
  

//     }
//   },2000);
// });
// }

// async function getAllData(){
//   await getData(1);
//   await getData(2);
// }
// (async function (){
//   await getData(1);
//   await getData(2);
// })();


// let myPromise = new Promise((resolve,reject)=>{
//     resolve("promise resolved....");
//     else{
//         reject("promise rejected...");
//     }
// })

// myPromise.then((mess)=>{console.log(mess)})
// .catch((err)=>){
//     console.log(err);

// }

// function check(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2===0){
//             resolve("number is even");
//         }
//         else{
//             reject("number is odd");
//         }
//     })

// }

// check(6).then((res)=>console.log(res)).catch(err=>console.log(err)).finally(()=>console.log("finalize....."));

// function transaction(withdrawl,balance){
//     return new Promise((resolve,reject)=>{
//         if(withdrawl<=balance){
//             resolve("successfull");
//         }
//         else{
//             reject("insufficient balance");
//         }
//     })

// }

// transaction(5000000,900000000).then((res)=>console.log(res)).catch(err=>console.log(err)).finally(()=>console.log("transaction completed....."));


// function marks(marks){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(marks>=70){
//                 resolve("pass");
//             }
//             else{
//                 reject("fail");
//             }
//         },2000);
//     });

// };

// marks(78).then((res)=>console.log(res)).catch(err=>console.log(err)).finally(()=>console.log("result declared"));

//FETCH API
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err));

// async function hello(){
//     return "hello i am a student....";
// }
// hello().then(res=>console.log(res)).catch(err=>console.log(err));

// async function sum(a,b){
//     return a+b;
// }
// sum(3,4).then(res=>console.log(res)).catch(err=>console.log(err));
