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
function orderReceived(callback) {
    setTimeout(() => {
        console.log(" Order Received");
        callback();
    }, 2000);
}

function restaurantPreparingFood(callback) {
    setTimeout(() => {
        console.log(" Restaurant is Preparing Food");
        callback();
    }, 2000);
}

function foodPacked(callback) {
    setTimeout(() => {
        console.log(" Food Packed");
        callback();
    }, 2000);
}

function deliveryPartnerPickedUp(callback) {
    setTimeout(() => {
        console.log(" Delivery Partner Picked Up the Food");
        callback();
    }, 2000);
}

function foodDelivered() {
    setTimeout(() => {
        console.log(" Food Delivered");
    }, 2000);
}


orderReceived(function () {
    restaurantPreparingFood(function () {
        foodPacked(function () {
            deliveryPartnerPickedUp(function () {
                foodDelivered();
            });
        });
    });
});