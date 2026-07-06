// let divs= document.querySelectorAll('.box');
// divs[0].innerText="unique div" ;
// let element= document.getElementById("box1").style.backgroundColor="red";

// let element2= document.getElementById("box2").style.backgroundColor="yellow";

// let element3= document.getElementById("box3").style.backgroundColor="green";

// console.log(element);
let heading = document.getElementById("heading");

    let paragraph = document.createElement("p");
    paragraph.innerText = heading.innerText
    paragraph.style.backgroundColor = "purple";

    heading.parentNode.replaceChild(paragraph, heading);